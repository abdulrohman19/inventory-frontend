<script lang="ts">
  import { onMount } from 'svelte';
  import { getBarangList } from '$lib/api/barang';
  import type { Barang } from '$lib/types';

  let kategori = '';
  let stokMin: number | '' = '';
  let barangList: Barang[] = [];
  let loading = false;
  let error = '';

  async function fetchBarang() {
    try {
      loading = true;
      barangList = await getBarangList(kategori, stokMin !== '' ? Number(stokMin) : undefined);
    } catch (e) {
      error = 'Gagal memuat data barang';
    } finally {
      loading = false;
    }
  }

  onMount(fetchBarang);
</script>

<div class="max-w-5xl mx-auto mt-10 px-4">
  <h1 class="text-2xl font-bold mb-4 text-gray-800">Daftar Barang</h1>

  <!-- Filter -->
  <form on:submit|preventDefault={fetchBarang} class="bg-white shadow-md rounded px-6 py-4 mb-6 flex gap-4 flex-wrap">
    <div class="flex flex-col">
      <label for="kategori" class="text-sm font-medium text-gray-700">Kategori</label>
      <input id="kategori" type="text" bind:value={kategori} placeholder="Contoh: Elektronik" class="input-style" />
    </div>
    <div class="flex flex-col">
      <label for="stok" class="text-sm font-medium text-gray-700">Stok Minimum</label>
      <input id="stok" type="number" bind:value={stokMin} class="input-style" />
    </div>
    <div class="flex items-end">
      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">Filter</button>
    </div>
  </form>

  {#if loading}
    <p>Memuat data...</p>
  {:else if error}
    <p class="text-red-500">{error}</p>
  {:else}
    <table class="min-w-full bg-white rounded shadow overflow-hidden">
      <thead class="bg-blue-600 text-white">
        <tr>
          <th class="text-left py-3 px-4">Nama</th>
          <th class="text-left py-3 px-4">Kategori</th>
          <th class="text-left py-3 px-4">Stok</th>
        </tr>
      </thead>
      <tbody>
        {#each barangList as barang}
          <tr class="border-b hover:bg-gray-50">
            <td class="py-2 px-4">{barang.nama}</td>
            <td class="py-2 px-4">{barang.kategori}</td>
            <td class="py-2 px-4">{barang.stok}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<style>
  .input-style {
    @apply border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300;
  }
</style>
