<!-- src/lib/components/BarangTable.svelte -->
<script lang="ts">
  import { formatCurrency } from '../utils/formatter';
  import { createEventDispatcher } from 'svelte';
  import type { Barang } from '$lib/types';

  export let barangList: Barang[] = [];
  const dispatch = createEventDispatcher();

  function handleEdit(id: string) {
    dispatch('edit', { id });
  }

  function handleDelete(id: string) {
    dispatch('delete', { id });
  }
</script>


<table>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Kategori</th>
      <th>Stok</th>
      <th>Harga Beli</th>
      <th>Harga Jual</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    {#each barangList as barang}
      <tr>
        <td>{barang.nama}</td>
        <td>{barang.kategori}</td>
        <td>{barang.stok}</td>
        <td>{formatCurrency(barang.hargaBeli)}</td>
        <td>{formatCurrency(barang.hargaJual)}</td>
        <td>
          <button on:click={() => handleEdit(barang.id)}>Edit</button>
          <button on:click={() => handleDelete(barang.id)}>Hapus</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 0.5rem;
    border: 1px solid #ccc;
  }
  th {
    background-color: #f4f4f4;
  }
</style>
