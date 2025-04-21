<script lang="ts">
  import { alertStore, type Alert } from '../stores/alertStore';
  import { onDestroy } from 'svelte';

  let alert: Alert | null = null;

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
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: 500;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slide-in 0.3s ease-out;
  }

  .success {
    background-color: #16a34a; /* green-600 */
  }

  .error {
    background-color: #dc2626; /* red-600 */
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
