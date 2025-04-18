<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import Alert from '$lib/components/Alert.svelte';
</script>

<main>
  <Alert />
  <slot />
</main>

<style>
  main {
    padding: 2rem;
    font-family: sans-serif;
  }
</style>
