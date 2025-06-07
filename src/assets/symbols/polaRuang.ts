import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";

export const polaRuang: { [kode: string]: __esri.Symbol } = {
  // Kawasan Lindung
  "Badan Air": new SimpleFillSymbol({
    color: [151, 219, 242, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Memberikan Perlindungan terhadap Kawasan Bawahannya":
    new SimpleFillSymbol({
      color: [25, 65, 40, 0.6],
      outline: { color: "white", width: 0.3 },
    }),
  "Kawasan Hutan Lindung": new SimpleFillSymbol({
    color: [50, 95, 40, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Lindung / Kawasan Tanaman Pangan": new SimpleFillSymbol({
    color: [50, 95, 40, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Lindung / Kawasan Hortikultura": new SimpleFillSymbol({
    color: [50, 95, 40, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Lindung / Kawasan Perkebunan": new SimpleFillSymbol({
    color: [50, 95, 40, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Lindung / Kawasan Permukiman Perdesaan": new SimpleFillSymbol({
    color: [50, 95, 40, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Lindung Gambut": new SimpleFillSymbol({
    color: [105, 105, 0, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Perlindungan Setempat": new SimpleFillSymbol({
    color: [5, 215, 215, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Konservasi
  "Kawasan Suaka Alam": new SimpleFillSymbol({
    color: [50, 50, 135, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Cagar Alam": new SimpleFillSymbol({
    color: [70, 70, 165, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Cagar Alam Laut": new SimpleFillSymbol({
    color: [90, 90, 195, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Suaka Margasatwa": new SimpleFillSymbol({
    color: [110, 110, 225, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Suaka Margasatwa Laut": new SimpleFillSymbol({
    color: [130, 130, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Pelestarian Alam
  "Kawasan Pelestarian Alam": new SimpleFillSymbol({
    color: [120, 90, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Taman Nasional": new SimpleFillSymbol({
    color: [155, 135, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Taman Hutan Raya": new SimpleFillSymbol({
    color: [185, 165, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Taman Wisata Alam": new SimpleFillSymbol({
    color: [210, 190, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Taman Wisata Alam Laut": new SimpleFillSymbol({
    color: [230, 210, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Taman Buru": new SimpleFillSymbol({
    color: [70, 150, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Konservasi Wilayah Pesisir
  "Kawasan Konservasi di Wilayah Pesisir dan Pulau-Pulau Kecil":
    new SimpleFillSymbol({
      color: [0, 130, 125, 0.6],
      outline: { color: "white", width: 0.3 },
    }),
  "Kawasan Konservasi Pesisir dan Pulau-Pulau Kecil": new SimpleFillSymbol({
    color: [20, 150, 170, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Suaka Pesisir": new SimpleFillSymbol({
    color: [70, 180, 190, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Suaka Pulau Kecil": new SimpleFillSymbol({
    color: [120, 205, 210, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Taman Pesisir": new SimpleFillSymbol({
    color: [160, 230, 220, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Taman Pulau Kecil": new SimpleFillSymbol({
    color: [200, 240, 230, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Konservasi Maritim": new SimpleFillSymbol({
    color: [5, 160, 125, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Daerah Perlindungan Adat Maritim": new SimpleFillSymbol({
    color: [30, 185, 125, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Daerah Perlindungan Budaya Maritim": new SimpleFillSymbol({
    color: [55, 210, 125, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Konservasi Perairan": new SimpleFillSymbol({
    color: [80, 245, 125, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Adat": new SimpleFillSymbol({
    color: [5, 105, 65, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Perlindungan Geologi
  "Kawasan Cagar Alam Geologi": new SimpleFillSymbol({
    color: [110, 135, 110, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Keunikan Batuan dan Fosil": new SimpleFillSymbol({
    color: [150, 135, 150, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Keunikan Bentang Alam": new SimpleFillSymbol({
    color: [180, 135, 150, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Keunikan Proses Geologi": new SimpleFillSymbol({
    color: [210, 135, 180, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Imbuhan Air Tanah": new SimpleFillSymbol({
    color: [205, 135, 100, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Budaya
  "Kawasan Cagar Budaya": new SimpleFillSymbol({
    color: [255, 55, 205, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Ekosistem
  "Kawasan Ekosistem Mangrove": new SimpleFillSymbol({
    color: [45, 150, 110, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Budi Daya Hutan
  "Kawasan Hutan Produksi Terbatas": new SimpleFillSymbol({
    color: [75, 155, 55, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Produksi Terbatas / Kawasan Perkebunan": new SimpleFillSymbol({
    color: [75, 155, 55, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Produksi Terbatas / Kawasan Permukiman Perdesaan":
    new SimpleFillSymbol({
      color: [75, 155, 55, 0.6],
      outline: { color: "white", width: 0.3 },
    }),
  "Kawasan Hutan Produksi Tetap": new SimpleFillSymbol({
    color: [125, 180, 55, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hutan Produksi Tetap / Kawasan Tanaman Pangan": new SimpleFillSymbol(
    {
      color: [125, 180, 55, 0.6],
      outline: { color: "white", width: 0.3 },
    }
  ),
  "Kawasan Hutan Produksi yang dapat Dikonversi": new SimpleFillSymbol({
    color: [155, 225, 55, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Perkebunan
  "Kawasan Perkebunan Rakyat": new SimpleFillSymbol({
    color: [155, 200, 155, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Pertanian
  "Kawasan Tanaman Pangan": new SimpleFillSymbol({
    color: [200, 245, 70, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Hortikultura": new SimpleFillSymbol({
    color: [230, 255, 75, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Perkebunan": new SimpleFillSymbol({
    color: [175, 175, 55, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Peternakan": new SimpleFillSymbol({
    color: [185, 235, 185, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  // Kawasan Perikanan
  "Kawasan Perikanan Tangkap": new SimpleFillSymbol({
    color: [100, 155, 210, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Perikanan Budi Daya": new SimpleFillSymbol({
    color: [130, 185, 210, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Pergaraman": new SimpleFillSymbol({
    color: [180, 150, 120, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  //Kawasan Pertambangan dan Energi
  "Kawasan Pertambangan Mineral Radioaktif": new SimpleFillSymbol({
    color: [25, 45, 75, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Pertambangan Mineral Logam": new SimpleFillSymbol({
    color: [45, 65, 95, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Pertambangan Mineral Bukan Logam": new SimpleFillSymbol({
    color: [65, 85, 115, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Peruntukan Pertambangan Batuan": new SimpleFillSymbol({
    color: [95, 115, 145, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Pertambangan Batubara": new SimpleFillSymbol({
    color: [125, 145, 175, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Pertambangan Minyak dan Gas Bumi": new SimpleFillSymbol({
    color: [155, 175, 205, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Panas Bumi": new SimpleFillSymbol({
    color: [205, 0, 0, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Pembangkitan Tenaga Listrik": new SimpleFillSymbol({
    color: [0, 255, 205, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  //Kawasan Peruntukan Industri
  "Kawasan Peruntukan Industri": new SimpleFillSymbol({
    color: [105, 0, 0, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  //Kawasan Pariwisata
  "Kawasan Pariwisata": new SimpleFillSymbol({
    color: [255, 165, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  //Kawasan Permukiman
  "Kawasan Permukiman Perkotaan": new SimpleFillSymbol({
    color: [245, 155, 30, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
  "Kawasan Permukiman Perdesaan": new SimpleFillSymbol({
    color: [235, 155, 60, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  //Kawasan Transportasi
  "Kawasan Transportasi": new SimpleFillSymbol({
    color: [215, 55, 0, 0.6],
    outline: { color: "white", width: 0.3 },
  }),

  //Kawasan Pertahanan dan Keamanan
  "Kawasan Pertahanan dan Keamanan": new SimpleFillSymbol({
    color: [155, 0, 255, 0.6],
    outline: { color: "white", width: 0.3 },
  }),
};
