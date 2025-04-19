<script lang="ts">
  import BarangForm from '$lib/components/BarangForm.svelte';
  import { createBarang } from '$lib/api/barang';
  import { goto } from '$app/navigation';
  import { showAlert } from '$lib/stores/alertStore';
  import type { Barang } from '$lib/types';

  async function handleSubmit(event: CustomEvent<{ barang: Barang }>) {
    try {
      await createBarang(event.detail.barang);
      showAlert('success', 'Barang berhasil ditambahkan');
      goto('/');
    } catch (error) {
      showAlert('error', 'Gagal menambahkan barang');
    }
  }
</script>

<main class="min-h-screen bg-gradient-to-br from-teal-50 to-blue-200 p-6 md:p-12">
  <div class="max-w-4xl mx-auto">
    <!-- Judul -->
    <h1 class="text-4xl font-bold mb-6 text-indigo-800 text-center flex items-center justify-center gap-3">
      ➕ <span>Tambah Barang</span>
    </h1>

    <!-- Form Container -->
    <div class="bg-white shadow-lg rounded-3xl border border-indigo-200 p-6 md:p-10 transition duration-300 hover:shadow-xl hover:shadow-indigo-400">
      <!-- BarangForm -->
      <BarangForm on:submit={handleSubmit} />
    </div>
  </div>
</main>
