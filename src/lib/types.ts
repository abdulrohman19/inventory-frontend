// src/lib/types.ts

export type Barang = {
  id: string;
  nama: string;
  kategori: string;
  stok: number;
  hargaBeli: number;
  hargaJual: number;
}

  
  export interface TransaksiItem {
    idBarang: string;
    namaBarang: string;
    hargaJual: number;
    jumlah: number;
  }
  
  export interface Transaksi {
    id: string;
    tanggal: string;
    namaBarang: string;
    jumlah: number;
    total: number;
  }
  
  