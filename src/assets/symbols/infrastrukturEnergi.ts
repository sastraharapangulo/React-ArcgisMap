import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";

export const infrastrukturEnergi: { [kode: string]: __esri.Symbol } = {
  "Pembangkit Listrik Tenaga Air (PLTA)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [0, 70, 255, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Uap (PLTU)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [0, 180, 250, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Gas (PLTG)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [0, 255, 190, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Diesel (PLTD)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [168, 56, 0, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Nuklir (PLTN)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [255, 255, 0, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Surya (PLTS)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [255, 170, 0, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Bayu (PLTB)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [195, 0, 255, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Panas Bumi (PLTP)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [255, 0, 0, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Tenaga Mikro Hidro (PLTMH)": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [70, 230, 0, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Pembangkit Listrik Lainnya": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 12,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [177.2, 111.2],
                      [129.6, 111.6],
                      [185, 169.4],
                      [133, 169.4],
                      [181.1, 227.7],
                      [123.2, 227.7],
                      [65, 155.3],
                      [116.5, 155.3],
                      [65, 87.4],
                      [117.5, 87.4],
                      [67.5, 12.1],
                      [177.2, 111.2],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [140, 140, 140, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
  "Gardu Listrik": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMPointSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            size: 10,
            billboardMode3D: "FaceNearPlane",
            frame: {
              xmin: 0,
              ymin: 0,
              xmax: 250,
              ymax: 250,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  rings: [
                    [
                      [197.4, 26.6],
                      [197.4, 127.3],
                      [220.8, 127.3],
                      [184.8, 164.1],
                      [184.8, 211.1],
                      [155.3, 211.1],
                      [155.3, 191.5],
                      [126.9, 223.4],
                      [29.3, 128],
                      [59, 128],
                      [58.3, 26.6],
                      [197.4, 26.6],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMPolygonSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidFill",
                      enable: true,
                      color: [0, 0, 0, 255],
                    },
                  ],
                  angleAlignment: "Map",
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
                    [250, 0],
                    [250, 250],
                    [0, 250],
                    [0, 0],
                  ],
                ],
              },
            },
          },
        ],
        animations: [],
      },
    },
  }),
};
