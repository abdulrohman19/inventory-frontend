<!-- src/lib/components/BarangForm.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let barang = {
    nama: '',
    kategori: '',
    stok: 0,
    hargaBeli: 0,
    hargaJual: 0
  };
  const dispatch = createEventDispatcher();

  function handleSubmit() {
    if (!barang.nama || !barang.kategori || barang.stok === undefined || barang.hargaBeli === undefined || barang.hargaJual === undefined) {
      alert('Semua field harus diisi');
      return;
    }
    dispatch('submit', { barang });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Nama:
    <input type="text" bind:value={barang.nama} required class="w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"/>
  </label>
  <label>
    Kategori:
    <input type="text" bind:value={barang.kategori} required class="w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"/>
  </label>
  <label>
    Stok:
    <input type="number" bind:value={barang.stok} min="0" required class="w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"/>
  </label>
  <label>
    Harga Beli:
    <input type="number" bind:value={barang.hargaBeli} min="0" required class="w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"/>
  </label>
  <label>
    Harga Jual:
    <input type="number" bind:value={barang.hargaJual} min="0" required class="w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"/>
  </label>
  <button type="submit"
  class="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
  >Simpan</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    display: flex;
    flex-direction: column;
  }
</style>
