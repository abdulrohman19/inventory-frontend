<!-- src/lib/components/FilterBar.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let kategori = '';
  export let stokMin = 0;
  const dispatch = createEventDispatcher();

  function applyFilter() {
    dispatch('filter', { kategori, stokMin });
  }
</script>

<div class="filter-bar">
  <input type="text" placeholder="Kategori" bind:value={kategori} />
  <input type="number" placeholder="Stok Min" bind:value={stokMin} min="0" />
  <button on:click={applyFilter}>Terapkan</button>
</div>

<style>
  .filter-bar {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
</style>
