<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import type { Barang } from '$lib/types';

  let barang: Barang = { id: '', nama: '', kategori: '', stok: 0 };
  let id = '';

  onMount(async () => {
    id = $page.params.id;
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/barang/${id}`);
    if (res.ok) {
      barang = await res.json();
    } else {
      alert('Gagal mengambil data barang');
    }
  });

  async function updateBarang() {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/barang/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(barang),
    });
    if (res.ok) {
      goto('/');
    } else {
      alert('Gagal memperbarui barang');
    }
  }
</script>

<main class="min-h-screen bg-gradient-to-br from-green-50 to-blue-200 p-6 md:p-12">
  <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
    <h1 class="text-3xl font-bold text-center text-indigo-700 mb-8">Edit Barang</h1>
    
    <form on:submit|preventDefault={updateBarang} class="space-y-6">
      <!-- Nama -->
      <div>
        <label for="nama" class="block text-lg text-gray-700">Nama:</label>
        <input
          id="nama"
          type="text"
          bind:value={barang.nama}
          required
          class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          placeholder="Nama Barang"
        />
      </div>

      <!-- Kategori -->
      <div>
        <label for="kategori" class="block text-lg text-gray-700">Kategori:</label>
        <input
          id="kategori"
          type="text"
          bind:value={barang.kategori}
          required
          class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          placeholder="Kategori Barang"
        />
      </div>

      <!-- Stok -->
      <div>
        <label for="stok" class="block text-lg text-gray-700">Stok:</label>
        <input
          id="stok"
          type="number"
          bind:value={barang.stok}
          required
          class="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          placeholder="Jumlah Stok"
        />
      </div>

      <!-- Tombol Simpan -->
      <div>
        <button
          type="submit"
          class="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Simpan Perubahan
        </button>
      </div>
    </form>
  </div>
</main>
