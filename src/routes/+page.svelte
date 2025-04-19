<script lang="ts">
	import { onMount } from 'svelte';
	import { getBarangList, deleteBarang } from '$lib/api/barang';
	import type { Barang } from '$lib/types';

	let barangList: Barang[] = [];
	let kategori = '';
	let stokMin: number | undefined = undefined;
	let error = '';

	async function fetchBarang() {
		try {
			barangList = await getBarangList(kategori, stokMin);
		} catch (e) {
			error = 'Gagal mengambil data barang';
		}
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		fetchBarang();
	}

	async function hapusBarang(id: string) {
		if (confirm('Apakah Anda yakin ingin menghapus barang ini?')) {
			await deleteBarang(id);
			fetchBarang();
		}
	}

	onMount(() => {
		fetchBarang();
	});
</script>

<main class="mx-auto max-w-7xl p-4 md:p-8">
	<h1 class="mb-6 flex items-center gap-3 text-4xl font-bold text-gray-800">
		📦 <span>Daftar Barang</span>
	</h1>

	<!-- Form Filter -->
	<form on:submit={handleSubmit} class="mb-6 flex flex-wrap items-end gap-4">
		<div class="flex flex-col">
			<label for="kategori" class="mb-1 text-sm text-gray-700">Kategori</label>
			<input
				id="kategori"
				type="text"
				placeholder="Contoh: Elektronik"
				bind:value={kategori}
				class="w-52 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
		</div>
		<div class="flex flex-col">
			<label for="stokMin" class="mb-1 text-sm text-gray-700">Stok Minimum</label>
			<input
				id="stokMin"
				type="number"
				placeholder="Contoh: 10"
				bind:value={stokMin}
				class="w-52 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			/>
		</div>
		<button
			type="submit"
			class="h-fit rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-indigo-800"
		>
			🔍 Filter
		</button>
	</form>

	<a
		href="/tambah"
		class="mb-6 inline-block rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-indigo-800"
	>
		+ Tambah Barang
	</a>

	{#if error}
		<p class="mb-4 text-red-600">{error}</p>
	{/if}

	<div class="overflow-x-auto rounded-lg bg-white shadow-xl ring-1 ring-gray-200">
		<table class="min-w-full text-left text-sm">
			<thead class="bg-gray-800 text-white">
				<tr>
					<th class="px-6 py-4 font-semibold tracking-wider">Nama</th>
					<th class="px-6 py-4 font-semibold tracking-wider">Kategori</th>
					<th class="px-6 py-4 font-semibold tracking-wider">Stok</th>
					<th class="px-6 py-4 font-semibold tracking-wider">Aksi</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#each barangList as barang, i}
					<tr class={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
						<td class="px-6 py-4 text-gray-800">{barang.nama}</td>
						<td class="px-6 py-4 text-gray-700">{barang.kategori}</td>
						<td class="px-6 py-4 text-gray-700">{barang.stok}</td>
						<td class="px-6 py-4">
							<div class="flex gap-2">
								<a
									href={`/edit/${barang.id}`}
                  class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded shadow-sm transition duration-200"
								>
                ✏️ Edit
								</a>
								<button
									on:click={() => hapusBarang(barang.id)}
									class="rounded bg-red-600 px-4 py-1.5 text-white shadow-sm transition duration-200 hover:bg-red-700"
								>
								🗑️	Hapus
								</button>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
