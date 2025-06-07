import Color from "@arcgis/core/Color";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";

// Fungsi bantu untuk membuat SimpleLineSymbol
const simpleLine = (
  color: number[] | string,
  width: number,
  style: "solid" | "dash" | "dot" | "dash-dot" | "short-dash" = "solid"
) =>
  new SimpleLineSymbol({
    color: new Color(color),
    width,
    style,
  });

export const jaringanTransportasi: { [kode: string]: __esri.Symbol } = {
  // Jalan
  "Jalan Arteri Primer": simpleLine([255, 81, 0, 1], 3),
  "Jalan Arteri Sekunder": simpleLine([255, 81, 0, 1], 1.8),

  "Jalan Kolektor Primer": simpleLine([255, 140, 0, 1], 3),

  "Jalan Kolektor Sekunder": simpleLine([255, 200, 0, 1], 1.8),
  "Jalan Lokal Primer": simpleLine([155, 90, 255, 1], 1.7),
  "Jalan Lokal Sekunder": simpleLine([178, 178, 255, 1], 1.5),
  "Jalan Lingkungan Primer": simpleLine([130, 130, 130, 1], 1),
  "Jalan Lingkungan Sekunder": simpleLine([156, 156, 156, 1], 0.8),
  "Jalan Khusus": simpleLine([78, 78, 78, 1], 1.5, "dash"),
  "Jalan Tol": simpleLine([245, 0, 0, 1], 0.8),

  // Kereta Api

  "Jaringan Jalur Kereta Api Antarkota": new WebStyleSymbol({
    name: "Railroad_Scheme 1_4",
    styleUrl:
      "https://cdn.arcgis.com/sharing/rest/content/items/971bd7dfb0684860957ab7844a245bc1/data",
  }),
  "Jaringan Jalur Kereta Api Perkotaan": new WebStyleSymbol({
    name: "B10",
    styleUrl:
      "https://cdn.arcgis.com/sharing/rest/content/items/971bd7dfb0684860957ab7844a245bc1/data",
  }),
  "Jaringan Jalur Kereta Api Khusus": new WebStyleSymbol({
    name: "Railroad, Narrow Gauge",
    styleUrl:
      "https://cdn.arcgis.com/sharing/rest/content/items/971bd7dfb0684860957ab7844a245bc1/data",
  }),

  // Alur Pelayaran
  "Alur-Pelayaran Kelas I": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Y",
            size: 10,
            billboardMode3D: "None",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 17,
              ymax: 17,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [15.5, 8.5],
                      [1.5, 16.58],
                      [1.5, 0.42],
                      [15.5, 8.5],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [255, 140, 0, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
            clippingPath: {
              type: "CIMClippingPath",
              clippingType: "Intersect",
              path: {
                rings: [
                  [
                    [0, 0],
                    [17, 0],
                    [17, 17],
                    [0, 17],
                    [0, 0],
                  ],
                ],
              },
            },
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              angleToLine: true,
              offset: 0,
              controlPointsPlacement: "NoConstraint",
              customEndingOffset: 0,
              endings: "WithHalfGap",
              offsetAlongLine: 0,
              placementTemplate: [30, 30],
            },
            color: [255, 140, 0, 255],
          },
          {
            type: "CIMSolidStroke",
            enable: true,
            capStyle: "Round",
            joinStyle: "Round",
            miterLimit: 10,
            width: 1.2,
            color: [255, 140, 0, 255],
          },
        ],
        animations: [],
      },
    },
  }),
  "Alur-Pelayaran Kelas II": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Y",
            size: 10,
            billboardMode3D: "None",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 17,
              ymax: 17,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [15.5, 8.5],
                      [1.5, 16.58],
                      [1.5, 0.42],
                      [15.5, 8.5],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [255, 140, 0, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
            clippingPath: {
              type: "CIMClippingPath",
              clippingType: "Intersect",
              path: {
                rings: [
                  [
                    [0, 0],
                    [17, 0],
                    [17, 17],
                    [0, 17],
                    [0, 0],
                  ],
                ],
              },
            },
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              angleToLine: true,
              offset: 0,
              controlPointsPlacement: "NoConstraint",
              customEndingOffset: 0,
              endings: "WithHalfGap",
              offsetAlongLine: 0,
              placementTemplate: [0, 10, 30], // 2 segitiga nyambung, ulangi setiap 30
            },
            color: [255, 140, 0, 255],
          },
          {
            type: "CIMSolidStroke",
            enable: true,
            capStyle: "Round",
            joinStyle: "Round",
            miterLimit: 10,
            width: 1.2,
            color: [255, 140, 0, 255],
          },
        ],
        animations: [],
      },
    },
  }),
  "Alur-Pelayaran Kelas III": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Y",
            size: 10,
            billboardMode3D: "None",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 17,
              ymax: 17,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [15.5, 8.5],
                      [1.5, 16.58],
                      [1.5, 0.42],
                      [15.5, 8.5],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [255, 140, 0, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
            clippingPath: {
              type: "CIMClippingPath",
              clippingType: "Intersect",
              path: {
                rings: [
                  [
                    [0, 0],
                    [17, 0],
                    [17, 17],
                    [0, 17],
                    [0, 0],
                  ],
                ],
              },
            },
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              angleToLine: true,
              offset: 0,
              controlPointsPlacement: "NoConstraint",
              customEndingOffset: 0,
              endings: "WithHalfGap",
              offsetAlongLine: 0,
              placementTemplate: [0, 10, 10, 30], // 3 segitiga nyambung, pola ulang tiap 30
            },
            color: [255, 140, 0, 255],
          },
          {
            type: "CIMSolidStroke",
            enable: true,
            capStyle: "Round",
            joinStyle: "Round",
            miterLimit: 10,
            width: 1.2,
            color: [255, 140, 0, 255],
          },
        ],
        animations: [],
      },
    },
  }),
  "Lintas Penyeberangan Antarnegara": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMSolidStroke",
            effects: [
              {
                type: "CIMGeometricEffectDashes",
                dashTemplate: [6, 6],
                lineDashEnding: "HalfPattern",
              },
            ],
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            // lineStyle3D biasanya tidak didukung di ArcGIS JS API, bisa dihapus jika error
            miterLimit: 10,
            width: 2,
            color: [255, 80, 0, 255],
          },
        ],
      },
    },
  }),
  "Lintas Penyeberangan Antarprovinsi": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMSolidStroke",
            effects: [
              {
                type: "CIMGeometricEffectDashes",
                dashTemplate: [6, 6],
                lineDashEnding: "HalfPattern",
              },
            ],
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            // lineStyle3D biasanya tidak didukung di ArcGIS JS API, bisa dihapus jika error
            miterLimit: 10,
            width: 2,
            color: [255, 120, 0, 255],
          },
        ],
      },
    },
  }),
  "Lintas Penyeberangan Antarkabupaten/Kota dalam Provinsi": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMSolidStroke",
            effects: [
              {
                type: "CIMGeometricEffectDashes",
                dashTemplate: [6, 6],
                lineDashEnding: "HalfPattern",
              },
            ],
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            // lineStyle3D biasanya tidak didukung di ArcGIS JS API, bisa dihapus jika error
            miterLimit: 10,
            width: 2,
            color: [255, 200, 0, 255],
          },
        ],
      },
    },
  }),
  "Lintas Penyeberangan dalam Kabupaten": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMSolidStroke",
            effects: [
              {
                type: "CIMGeometricEffectDashes",
                dashTemplate: [6, 6],
                lineDashEnding: "HalfPattern",
              },
            ],
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            // lineStyle3D biasanya tidak didukung di ArcGIS JS API, bisa dihapus jika error
            miterLimit: 10,
            width: 2,
            color: [255, 255, 0, 255],
          },
        ],
      },
    },
  }),
};
