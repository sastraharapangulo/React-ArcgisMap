export const warnaKategori: { [kode: string]: number[] } = {
  // Kawasan Lindung
  "Badan Air": [151, 219, 242, 0.6],
  "Kawasan Memberikan Perlindungan terhadap Kawasan Bawahannya": [
    25, 65, 40, 1,
  ],
  "Kawasan Hutan Lindung": [50, 95, 40, 0.6],
  "Kawasan Hutan Lindung / Kawasan Tanaman Pangan": [50, 95, 40, 0.6],
  "Kawasan Hutan Lindung / Kawasan Hortikultura": [50, 95, 40, 0.6],
  "Kawasan Hutan Lindung / Kawasan Perkebunan": [50, 95, 40, 0.6],
  "Kawasan Hutan Lindung / Kawasan Permukiman Perdesaan": [50, 95, 40, 0.6],
  "Kawasan Lindung Gambut": [105, 105, 0, 0.6],
  "Kawasan Perlindungan Setempat": [5, 215, 215, 0.6],

  // Kawasan Konservasi
  "Kawasan Suaka Alam": [50, 50, 135, 0.6],
  "Cagar Alam": [70, 70, 165, 0.6],
  "Cagar Alam Laut": [90, 90, 195, 0.6],
  "Suaka Margasatwa": [110, 110, 225, 0.6],
  "Suaka Margasatwa Laut": [130, 130, 255, 0.6],

  // Kawasan Pelestarian Alam
  "Kawasan Pelestarian Alam": [120, 90, 255, 0.6],
  "Taman Nasional": [155, 135, 255, 0.6],
  "Taman Hutan Raya": [185, 165, 255, 0.6],
  "Taman Wisata Alam": [210, 190, 255, 0.6],
  "Taman Wisata Alam Laut": [230, 210, 255, 0.6],
  "Kawasan Taman Buru": [70, 150, 255, 0.6],

  // Kawasan Konservasi Wilayah Pesisir
  "Kawasan Konservasi di Wilayah Pesisir dan Pulau-Pulau Kecil": [
    0, 130, 125, 1,
  ],
  "Kawasan Konservasi Pesisir dan Pulau-Pulau Kecil": [20, 150, 170, 0.6],
  "Suaka Pesisir": [70, 180, 190, 0.6],
  "Suaka Pulau Kecil": [120, 205, 210, 0.6],
  "Taman Pesisir": [160, 230, 220, 0.6],
  "Taman Pulau Kecil": [200, 240, 230, 0.6],
  "Kawasan Konservasi Maritim": [5, 160, 125, 0.6],
  "Daerah Perlindungan Adat Maritim": [30, 185, 125, 0.6],
  "Daerah Perlindungan Budaya Maritim": [55, 210, 125, 0.6],
  "Kawasan Konservasi Perairan": [80, 245, 125, 0.6],
  "Kawasan Hutan Adat": [5, 105, 65, 0.6],

  // Kawasan Perlindungan Geologi
  "Kawasan Cagar Alam Geologi": [110, 135, 110, 0.6],
  "Kawasan Keunikan Batuan dan Fosil": [150, 135, 150, 0.6],
  "Kawasan Keunikan Bentang Alam": [180, 135, 150, 0.6],
  "Kawasan Keunikan Proses Geologi": [210, 135, 180, 0.6],
  "Kawasan Imbuhan Air Tanah": [205, 135, 100, 0.6],

  // Kawasan Budaya
  "Kawasan Cagar Budaya": [255, 55, 205, 0.6],

  // Kawasan Ekosistem
  "Kawasan Ekosistem Mangrove": [45, 150, 110, 0.6],

  // Kawasan Budi Daya Hutan
  "Kawasan Hutan Produksi Terbatas": [75, 155, 55, 0.6],
  "Kawasan Hutan Produksi Terbatas / Kawasan Perkebunan": [75, 155, 55, 0.6],
  "Kawasan Hutan Produksi Terbatas / Kawasan Permukiman Perdesaan": [
    75, 155, 55, 1,
  ],
  "Kawasan Hutan Produksi Tetap": [125, 180, 55, 0.6],
  "Kawasan Hutan Produksi Tetap / Kawasan Tanaman Pangan": [125, 180, 55, 0.6],
  "Kawasan Hutan Produksi yang dapat Dikonversi": [155, 225, 55, 0.6],

  // Kawasan Perkebunan
  "Kawasan Perkebunan Rakyat": [155, 200, 155, 0.6],

  // Kawasan Pertanian
  "Kawasan Tanaman Pangan": [200, 245, 70, 0.6],
  "Kawasan Hortikultura": [230, 255, 75, 0.6],
  "Kawasan Perkebunan": [175, 175, 55, 0.6],
  "Kawasan Peternakan": [185, 235, 185, 0.6],

  // Kawasan Perikanan
  "Kawasan Perikanan Tangkap": [100, 155, 210, 0.6],
  "Kawasan Perikanan Budi Daya": [130, 185, 210, 0.6],
  "Kawasan Pergaraman": [180, 150, 120, 0.6],

  //Kawasan Pertambangan dan Energi
  "Kawasan Pertambangan Mineral Radioaktif": [25, 45, 75, 0.6],
  "Kawasan Pertambangan Mineral Logam": [45, 65, 95, 0.6],
  "Kawasan Pertambangan Mineral Bukan Logam": [65, 85, 115, 0.6],
  "Kawasan Peruntukan Pertambangan Batuan": [95, 115, 145, 0.6],
  "Kawasan Pertambangan Batubara": [125, 145, 175, 0.6],
  "Kawasan Pertambangan Minyak dan Gas Bumi": [155, 175, 205, 0.6],
  "Kawasan Panas Bumi": [205, 0, 0, 0.6],
  "Kawasan Pembangkitan Tenaga Listrik": [0, 255, 205, 0.6],

  //Kawasan Peruntukan Industri
  "Kawasan Peruntukan Industri": [105, 0, 0, 0.6],

  //Kawasan Pariwisata
  "Kawasan Pariwisata": [255, 165, 255, 0.6],

  //Kawasan Permukiman
  "Kawasan Permukiman Perkotaan": [245, 155, 30, 0.6],
  "Kawasan Permukiman Perdesaan": [235, 155, 60, 0.6],

  //Kawasan Transportasi
  "Kawasan Transportasi": [215, 55, 0, 0.6],

  //Kawasan Pertahanan dan Keamanan
  "Kawasan Pertahanan dan Keamanan": [155, 0, 255, 0.6],
};
