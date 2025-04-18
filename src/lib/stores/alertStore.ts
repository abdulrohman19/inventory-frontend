// src/lib/stores/alertStore.ts
import { writable } from 'svelte/store';

export const alertStore = writable<{ type: 'success' | 'error'; message: string } | null>(null);

export function showAlert(type: 'success' | 'error', message: string) {
  alertStore.set({ type, message });
  setTimeout(() => alertStore.set(null), 3000);
}
