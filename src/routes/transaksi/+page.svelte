<script lang="ts">
  import { onMount } from 'svelte';
  import { Button, Input, Card } from '@skeletonlabs/skeleton';
  import type { Barang, TransaksiItem } from '$lib/types';

  let daftarBarang: Barang[] = [];
  let transaksi: TransaksiItem[] = [];

  onMount(async () => {
    // Fetch data barang dari API atau sumber data lainnya
    daftarBarang = [
      { id: '1', nama: 'Produk A', kategori: 'Kategori 1', stok: 50, hargaBeli: 10000, hargaJual: 15000 },
      { id: '2', nama: 'Produk B', kategori: 'Kategori 2', stok: 30, hargaBeli: 20000, hargaJual: 25000 },
      // Tambahkan data barang lainnya
    ];
  });

  function tambahItem(barang: Barang) {
    const existing = transaksi.find(item => item.idBarang === barang.id);
    if (existing) {
      existing.jumlah += 1;
    } else {
      transaksi.push({
        idBarang: barang.id,
        namaBarang: barang.nama,
        hargaJual: barang.hargaJual,
        jumlah: 1
      });
    }
  }

  function hapusItem(index: number) {
    transaksi.splice(index, 1);
  }

  function totalHarga(): number {
    return transaksi.reduce((total, item) => total + item.hargaJual * item.jumlah, 0);
  }

  function simpanTransaksi() {
    // Simpan transaksi ke backend atau lakukan proses lainnya
    alert('Transaksi berhasil disimpan!');
    transaksi = [];
  }
</script>

<Card class="bg-gradient-to-br from-teal-100 to-blue-200 p-6 rounded-xl shadow-lg">
  <h1 class="text-3xl font-bold mb-6 text-indigo-800 text-center">Transaksi Penjualan</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Daftar Barang -->
    <div class="p-4 bg-white rounded-xl shadow-md">
      <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Daftar Barang</h2>
      <ul class="space-y-3">
        {#each daftarBarang as barang}
          <li class="flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors">
            <span class="text-gray-800">{barang.nama} - Rp {barang.hargaJual.toLocaleString()}</span>
            <Button on:click={() => tambahItem(barang)} class="bg-teal-500 text-white hover:bg-teal-600 transition-all">
              Tambah
            </Button>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Keranjang -->
    <div class="p-4 bg-white rounded-xl shadow-md">
      <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Keranjang</h2>
      <ul class="space-y-3">
        {#each transaksi as item, index}
          <li class="flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-indigo-50 transition-colors">
            <span class="text-gray-800">{item.namaBarang} x {item.jumlah} = Rp {(item.hargaJual * item.jumlah).toLocaleString()}</span>
            <Button on:click={() => hapusItem(index)} variant="ghost" class="text-red-500 hover:text-red-600">
              Hapus
            </Button>
          </li>
        {/each}
      </ul>

      <!-- Total dan Simpan -->
      <div class="mt-6">
        <p class="text-xl font-bold text-teal-600">Total: Rp {totalHarga().toLocaleString()}</p>
        <Button on:click={simpanTransaksi} class="mt-4 w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
          Simpan Transaksi
        </Button>
      </div>
    </div>
  </div>
</Card>
