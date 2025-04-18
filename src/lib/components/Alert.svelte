<!-- src/lib/components/Alert.svelte -->
<script lang="ts">
  import { alertStore } from '../stores/alertStore';
  import { onDestroy } from 'svelte';
  let alert = null;
  const unsubscribe = alertStore.subscribe(value => alert = value);
  onDestroy(unsubscribe);
</script>

{#if alert}
  <div class="alert {alert.type}">
    {alert.message}
  </div>
{/if}

<style>
  .alert {
    position: fixed;
    top: 1rem;
    right: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
    z-index: 1000;
  }
  .success {
    background-color: green;
  }
  .error {
    background-color: red;
  }
</style>
