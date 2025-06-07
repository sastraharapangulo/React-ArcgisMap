import Color from "@arcgis/core/Color";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

export const permukiman: { [kode: string]: __esri.Symbol } = {
  "Pusat Kegiatan Wilayah (PKW)": new SimpleMarkerSymbol({
    style: "square", // contoh bentuk simbol, bisa kamu sesuaikan
    color: new Color([237, 123, 47, 1]), // RGB dan alpha 1
    size: 23,
    outline: {
      color: new Color([0, 0, 0, 1]),
      width: 0.4,
    },
  }),

  "Pusat Kegiatan Strategis Nasional (PKSN)": new SimpleMarkerSymbol({
    style: "square", // contoh bentuk simbol, bisa kamu sesuaikan
    color: new Color([255, 255, 255, 1]), // RGB dan alpha 1
    size: 23,
    outline: {
      color: new Color([255, 0, 0, 1]),
      width: 0.4,
    },
  }),
  "Pusat Kegiatan Lokal (PKL)": new SimpleMarkerSymbol({
    style: "square", // contoh bentuk simbol, bisa kamu sesuaikan
    color: new Color([255, 255, 0, 1]), // RGB dan alpha 1
    size: 23,
    outline: {
      color: new Color([0, 0, 0, 1]),
      width: 0.4,
    },
  }),
  "Pusat Pelayanan Kawasan": new SimpleMarkerSymbol({
    style: "triangle", // contoh bentuk simbol, bisa kamu sesuaikan
    color: new Color([255, 85, 0, 1]), // RGB dan alpha 1
    size: 23,
    outline: {
      color: new Color([255, 0, 0, 1]),
      width: 0.4,
    },
  }),
  "Pusat Pelayanan Lingkungan": new SimpleMarkerSymbol({
    style: "triangle", // contoh bentuk simbol, bisa kamu sesuaikan
    color: new Color([255, 190, 0, 1]), // RGB dan alpha 1
    size: 23,
    outline: {
      color: new Color([255, 0, 0, 1]),
      width: 0.4,
    },
  }),
};
