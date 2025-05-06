import { useEffect, useRef, useState } from "react";
import "./TataRuang.css";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Home from "@arcgis/core/widgets/Home";
import Search from "@arcgis/core/widgets/Search";
import Expand from "@arcgis/core/widgets/Expand";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import { warnaKategori } from "../../assets/warnaKategori";
import Hero from "../../Components/Hero/Hero";

interface FeatureAttributes {
  NAMOBJ: string;
  WADMPR: string;
  WADMKK: string;
  WADMKC: string;
  LUASHA: number;
  REMARK: string;
  message?: string;
}

function TataRuang() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [basemap, setBasemap] = useState("streets-vector");
  const [selectedFeature, setSelectedFeature] =
    useState<FeatureAttributes | null>(null);

  useEffect(() => {
    const geojsonLayer = new GeoJSONLayer({
      url: "/Pola_RTRW_KabKaro.json",
      outFields: ["*"],
      renderer: {
        type: "unique-value",
        field: "NAMOBJ",
        defaultSymbol: new SimpleFillSymbol({
          color: [200, 200, 200, 0.3],
          outline: { color: "white", width: 0.5 },
        }),
        uniqueValueInfos: [],
      },
    });

    geojsonLayer.when(() => {
      geojsonLayer
        .queryFeatures({ where: "1=1", outFields: ["NAMOBJ"] })
        .then((results) => {
          const uniqueNames = Array.from(
            new Set(results.features.map((f) => f.attributes.NAMOBJ))
          );
          const uniqueValueInfos = uniqueNames.map((name) => ({
            value: name,
            symbol: new SimpleFillSymbol({
              color: warnaKategori[name] || [200, 200, 200, 0.6],
              outline: { color: "white", width: 0.3 },
            }),
            label: name,
          }));

          const renderer = geojsonLayer.renderer as __esri.UniqueValueRenderer;
          renderer.uniqueValueInfos = uniqueValueInfos;
        });
    });

    const map = new Map({
      basemap: basemap,
      layers: [geojsonLayer],
    });

    const labelLayer = new VectorTileLayer({
      portalItem: {
        id: "1b243539f4514b6ba35e7d995890db1d", // World_Basemap_v2 Labels
      },
    });
    map.add(labelLayer); // Add labels above polygon layer

    const view = new MapView({
      container: mapRef.current!,
      map: map,
      center: [98.4, 3.1],
      zoom: 11,
    });

    const homeWidget = new Home({ view });
    view.ui.add(homeWidget, "top-left");

    const searchWidget = new Search({ view });
    const searchExpand = new Expand({
      view,
      content: searchWidget,
      expandTooltip: "Open Search",
      expandIcon: "search",
      expanded: false,
    });
    view.ui.add(searchExpand, "top-right");

    const handleClick = (event: __esri.ViewClickEvent) => {
      view.hitTest(event).then((response) => {
        const results = response.results.filter(
          (result): result is __esri.GraphicHit => "graphic" in result
        );

        if (results.length > 0 && results[0].graphic?.attributes) {
          setSelectedFeature(results[0].graphic.attributes);
        } else {
          setSelectedFeature(null);
        }
      });
    };

    const clickHandle = view.on("click", handleClick);

    return () => {
      clickHandle.remove();
      view.destroy();
    };
  }, [basemap]);

  return (
    <>
      <Hero title="TATA RUANG" />
      <h2 className="text-center fw-bold m-4">Tata Ruang Kabupaten Karo</h2>

      <div className="container position-relative">
        <div className="viewDiv" ref={mapRef}></div>

        <select
          name="dropdown"
          className="basemap form-select w-auto"
          onChange={(e) => setBasemap(e.target.value)}
          value={basemap}
        >
          <option value="streets-vector">Streets Vector</option>
          <option value="osm">Open Street Map</option>
          <option value="satellite">Satellite</option>
          <option value="topo-vector">Topo Vector</option>
        </select>

        {selectedFeature && (
          <div className="sidebar">
            <button
              className="close-button"
              onClick={() => setSelectedFeature(null)}
            >
              ✖
            </button>
            <h2>Detail Area</h2>
            {selectedFeature.NAMOBJ ? (
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Nama</th>
                      <td>:</td>
                      <td>{selectedFeature.NAMOBJ}</td>
                    </tr>
                    <tr>
                      <th scope="row">Provinsi</th>
                      <td>:</td>
                      <td>{selectedFeature.WADMPR}</td>
                    </tr>
                    <tr>
                      <th scope="row">Kabupaten</th>
                      <td>:</td>
                      <td>{selectedFeature.WADMKK}</td>
                    </tr>
                    <tr>
                      <th scope="row">Kecamatan</th>
                      <td>:</td>
                      <td>{selectedFeature.WADMKC}</td>
                    </tr>
                    <tr>
                      <th scope="row">Luas (ha)</th>
                      <td>:</td>
                      <td>{selectedFeature.LUASHA}</td>
                    </tr>
                    <tr>
                      <th scope="row">Deskripsi</th>
                      <td>:</td>
                      <td>{selectedFeature.REMARK}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <p>Belum ada data untuk area yang dipilih</p>
            )}
          </div>
        )}
      </div>
      <br />
    </>
  );
}

export default TataRuang;
