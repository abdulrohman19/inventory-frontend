// src/lib/api/transaksi.ts
import type { Transaksi } from '../../lib/types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function createTransaksi(data: Transaksi): Promise<void> {
  const res = await fetch(`${BASE_URL}/transaksi`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Gagal memproses transaksi');
  }
}
