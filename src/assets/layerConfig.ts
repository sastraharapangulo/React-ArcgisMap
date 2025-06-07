import Color from "@arcgis/core/Color";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";

export interface LayerInfo {
  id: string;
  title: string;
  url: string;
  defaultSymbol: __esri.Symbol;
  type: "simple" | "unique-value" | "class-breaks";
}

export const layerConfigs: LayerInfo[] = [
  {
    id: "pola",
    title: "Pola Tata Ruang",
    url: "json/Pola_RTRW_KabKaro.json",
    defaultSymbol: new SimpleFillSymbol({
      color: new Color([200, 200, 200, 0.3]),
      outline: { color: new Color("white"), width: 0.5 },
    }),
    type: "unique-value",
  },
  {
    id: "permukiman",
    title: "Sistem Pusat Permukiman",
    url: "json/Sistem_Pusat_Permukiman.json",
    defaultSymbol: new SimpleMarkerSymbol({
      style: "square", // contoh bentuk simbol, bisa kamu sesuaikan
      color: new Color([237, 123, 47, 1]), // RGB dan alpha 1
      size: 2.3,
      outline: {
        color: new Color([0, 0, 0, 1]),
        width: 0.4,
      },
    }),
    type: "unique-value",
  },
  {
    id: "jaringanTransportasi",
    title: "Sistem Jaringan Transportasi",
    url: "json/Sistem_Jaringan_Transportasi.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "infrastrukturTransportasi",
    title: "Sistem Infrastruktur Transportasi",
    url: "json/Sistem_Infrastruktur_Transportasi.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "jaringanEnergi",
    title: "Sistem Jaringan Energi",
    url: "json/Sistem_Jaringan_Energi.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "infrastrukturEnergi",
    title: "Sistem Infrastruktur Energi",
    url: "json/Sistem_Infrastruktur_Energi.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "infrastrukturTelekomunikasi",
    title: "Sistem Infrastruktur Telekomunikasi",
    url: "json/Sistem_Infrastruktur_Telekomunikasi.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "jaringanSumberDayaAir",
    title: "Sistem Jaringan Sumber Daya Air",
    url: "json/Sistem_Jaringan_Sumber_Daya_Air.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "infrastrukturSumberDayaAir",
    title: "Sistem Infrastruktur Sumber Daya Air",
    url: "json/Sistem_Infrastruktur_Sumber_Daya_Air.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "jaringanPrasaranaLain",
    title: "Sistem Jaringan Prasarana Lainnya",
    url: "json/Sistem_Jaringan_Prasarana_Lainnya.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  {
    id: "infrastrukturPrasaranaLain",
    title: "Sistem Infrastruktur Prasarana Lainnya",
    url: "json/Sistem_Infrastruktur_Prasarana_Lainnya.json",
    defaultSymbol: new SimpleLineSymbol({
      color: new Color([0, 0, 0, 1]),
      width: 1,
    }),
    type: "unique-value",
  },
  // Tambahkan layer lainnya sesuai kebutuhan
];
