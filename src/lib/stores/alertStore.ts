// src/lib/stores/alertStore.ts
import { writable } from 'svelte/store';

export type Alert = {
  type: 'success' | 'error';
  message: string;
};

export const alertStore = writable<Alert | null>(null);

export function showAlert(type: Alert['type'], message: string) {
  alertStore.set({ type, message });

  setTimeout(() => {
    alertStore.set(null);
  }, 3000);
}
