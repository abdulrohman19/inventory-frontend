import type { Barang } from '../../lib/types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getBarangList(kategori?: string, stokMin?: number): Promise<Barang[]> {
  const params = new URLSearchParams();
  if (kategori) params.append('kategori', kategori);
  if (stokMin !== undefined) params.append('stokMin', stokMin.toString());

  const res = await fetch(`${BASE_URL}/barang?${params.toString()}`);
  if (!res.ok) throw new Error('Gagal mengambil data barang');
  return res.json();
}

export async function getBarangById(id: string): Promise<Barang> {
  const res = await fetch(`${BASE_URL}/barang/${id}`);
  if (!res.ok) throw new Error('Gagal mengambil data barang');
  return res.json();
}

export async function createBarang(data: Omit<Barang, 'id'>): Promise<Barang> {
  const res = await fetch(`${BASE_URL}/barang`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Gagal menambahkan barang');
  return res.json();
}

export async function updateBarang(id: string, data: Omit<Barang, 'id'>): Promise<Barang> {
  const res = await fetch(`${BASE_URL}/barang/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Gagal memperbarui barang');
  return res.json();
}

export async function deleteBarang(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/barang/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Gagal menghapus barang');
}
