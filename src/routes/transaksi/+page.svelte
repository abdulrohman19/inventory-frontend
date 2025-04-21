<script lang="ts">
  import { onMount } from 'svelte';
  import type { Transaksi } from '$lib/types';
  import { formatCurrency } from '$lib/utils/formatter';

  let transaksiList: Transaksi[] = [];

  onMount(async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/transaksi`);
    if (res.ok) {
      transaksiList = await res.json();
    } else {
      alert('Gagal mengambil data transaksi');
    }
  });
</script>

<main class="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6 md:p-12">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold text-center text-orange-700 mb-8">📜 Daftar Transaksi</h1>

    <div class="overflow-x-auto shadow-lg rounded-xl border border-orange-200 bg-white">
      <table class="w-full table-auto border-collapse">
        <thead class="bg-orange-100 text-orange-700">
          <tr>
            <th class="p-4 text-left">Tanggal</th>
            <th class="p-4 text-left">Barang</th>
            <th class="p-4 text-left">Jumlah</th>
            <th class="p-4 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {#each transaksiList as transaksi}
            <tr class="hover:bg-orange-50 transition">
              <td class="p-4">{new Date(transaksi.tanggal).toLocaleDateString()}</td>
              <td class="p-4">{transaksi.namaBarang}</td>
              <td class="p-4">{transaksi.jumlah}</td>
              <td class="p-4">{formatCurrency(transaksi.total)}</td>
            </tr>
          {/each}
          {#if transaksiList.length === 0}
            <tr>
              <td class="p-4 text-center text-gray-500" colspan="4">Belum ada transaksi.</td>
            </tr>
          {/if}
        </tbody>
      </table>
    </div>
  </div>
</main>
