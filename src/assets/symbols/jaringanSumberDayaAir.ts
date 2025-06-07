import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";

export const jaringanSumberDayaAir: { [kode: string]: __esri.Symbol } = {
  "Jaringan Irigasi Primer": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: -2,
              endings: "NoConstraint",
              offsetAlongLine: 7.25,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [0, 76, 168, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: 2,
              endings: "NoConstraint",
              offsetAlongLine: 14.75,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [0, 76, 168, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMSolidStroke",
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            lineStyle3D: "Strip",
            miterLimit: 10,
            width: 1.4,
            height3D: 1,
            anchor3D: "Center",
            color: [0, 76, 168, 255],
          },
        ],
        animations: [],
      },
    },
  }),
  "Jaringan Irigasi Sekunder": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: -2,
              endings: "NoConstraint",
              offsetAlongLine: 7.25,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [255, 0, 0, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: 2,
              endings: "NoConstraint",
              offsetAlongLine: 14.75,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [255, 0, 0, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMSolidStroke",
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            lineStyle3D: "Strip",
            miterLimit: 10,
            width: 1.4,
            height3D: 1,
            anchor3D: "Center",
            color: [255, 0, 0, 255],
          },
        ],
        animations: [],
      },
    },
  }),
  "Jaringan Irigasi Tersier": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: -2,
              endings: "NoConstraint",
              offsetAlongLine: 7.25,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [169, 0, 230, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: 2,
              endings: "NoConstraint",
              offsetAlongLine: 14.75,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [168, 0, 230, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMSolidStroke",
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            lineStyle3D: "Strip",
            miterLimit: 10,
            width: 1.4,
            height3D: 1,
            anchor3D: "Center",
            color: [169, 0, 230, 255],
          },
        ],
        animations: [],
      },
    },
  }),
  "Jaringan Irigasi Air Tanah": new CIMSymbol({
    data: {
      type: "CIMSymbolReference",
      symbol: {
        type: "CIMLineSymbol",
        symbolLayers: [
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: -2,
              endings: "NoConstraint",
              offsetAlongLine: 7.25,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [0, 168, 132, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMVectorMarker",
            enable: true,
            anchorPointUnits: "Relative",
            dominantSizeAxis3D: "Z",
            rotation: 90,
            size: 4,
            billboardMode3D: "None",
            markerPlacement: {
              type: "CIMMarkerPlacementAlongLineSameSize",
              placePerPart: true,
              angleToLine: true,
              offset: 2,
              endings: "NoConstraint",
              offsetAlongLine: 14.75,
              placementTemplate: [15],
            },
            frame: {
              xmin: -1,
              ymin: -1,
              xmax: 1,
              ymax: 1,
            },
            markerGraphics: [
              {
                type: "CIMMarkerGraphic",
                geometry: {
                  paths: [
                    [
                      [1, 0],
                      [-1, 0],
                    ],
                  ],
                },
                symbol: {
                  type: "CIMLineSymbol",
                  symbolLayers: [
                    {
                      type: "CIMSolidStroke",
                      enable: true,
                      capStyle: "Butt",
                      joinStyle: "Round",
                      lineStyle3D: "Strip",
                      miterLimit: 10,
                      width: 0.5,
                      height3D: 1,
                      anchor3D: "Center",
                      color: [0, 168, 132, 255],
                    },
                  ],
                },
              },
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true,
          },
          {
            type: "CIMSolidStroke",
            enable: true,
            capStyle: "Butt",
            joinStyle: "Round",
            lineStyle3D: "Strip",
            miterLimit: 10,
            width: 1.4,
            height3D: 1,
            anchor3D: "Center",
            color: [0, 168, 132, 255],
          },
        ],
        animations: [],
      },
    },
  }),
};
