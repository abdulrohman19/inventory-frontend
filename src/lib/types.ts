// src/lib/types.ts

export interface Barang {
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
    tanggal: string;
    items: TransaksiItem[];
  }
  