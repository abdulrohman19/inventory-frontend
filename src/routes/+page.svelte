<script lang="ts">
  import { onMount } from 'svelte';
  import type { Barang } from '$lib/types';

  let barangList: Barang[] = [];

  onMount(async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/barang`);
    if (res.ok) {
      barangList = await res.json();
    } else {
      alert('Gagal mengambil data barang');
    }
  });

  async function hapusBarang(id: string) {
    if (confirm('Apakah Anda yakin ingin menghapus barang ini?')) {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/barang/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        barangList = barangList.filter((b) => b.id !== id);
      } else {
        alert('Gagal menghapus barang');
      }
    }
  }
</script>

<main class="p-4 md:p-8 max-w-7xl mx-auto">
  <h1 class="text-4xl font-bold mb-6 text-gray-800 flex items-center gap-3">
    📦 <span>Daftar Barang</span>
  </h1>

  <a
    href="/tambah"
    class="inline-block mb-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition duration-200 text-sm font-semibold"
  >
    + Tambah Barang
  </a>

  <div class="overflow-x-auto bg-white shadow-xl rounded-lg ring-1 ring-gray-200">
    <table class="min-w-full text-sm text-left">
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
          <tr class="{i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}">
            <td class="px-6 py-4 text-gray-800">{barang.nama}</td>
            <td class="px-6 py-4 text-gray-700">{barang.kategori}</td>
            <td class="px-6 py-4 text-gray-700">{barang.stok}</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <a
                  href={`/edit/${barang.id}`}
                  class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded shadow-sm transition duration-200"
                >
                  Edit
                </a>
                <button
                  on:click={() => hapusBarang(barang.id)}
                  class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1.5 rounded shadow-sm transition duration-200"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>
