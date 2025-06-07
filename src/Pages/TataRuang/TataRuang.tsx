import { useEffect, useRef, useState } from "react";
import "./TataRuang.css";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Home from "@arcgis/core/widgets/Home";
import Search from "@arcgis/core/widgets/Search";
import Expand from "@arcgis/core/widgets/Expand";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import Hero from "../../Components/Hero/Hero";
import { layerConfigs } from "../../assets/layerConfig";
import { rendererSymbols } from "../../assets/layerRenderers";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

function TataRuang() {
  const mapRef = useRef<HTMLDivElement>(null);

  const [layerVisibility, setLayerVisibility] = useState<{
    [id: string]: boolean;
  }>(
    Object.fromEntries(
      layerConfigs.map((cfg) => [
        cfg.id,
        cfg.id === "infrastrukturPrasaranaLain",
      ])
    )
  );

  useEffect(() => {
    const map = new Map({
      basemap: "topo-vector",
    });

    const labelLayer = new VectorTileLayer({
      style:
        "https://www.arcgis.com/sharing/rest/content/items/5caa08e28c3940e1a6f04aab9e4889cd/resources/styles/root.json",
    });
    map.add(labelLayer);

    layerConfigs.forEach((cfg) => {
      if (!layerVisibility[cfg.id]) return;

      const symbols = rendererSymbols[cfg.id];

      const uniqueValueInfos = symbols
        ? Object.entries(symbols).map(([value, symbol]) => ({
            value,
            label: value,
            symbol,
          }))
        : []; // kosong jika belum ada

      console.log("ini", cfg.defaultSymbol.toJSON());

      const layer = new GeoJSONLayer({
        url: cfg.url,
        outFields: ["*"],
        title: cfg.title,
        popupTemplate: {
          title: "{NAMOBJ}",
          content: [
            {
              type: "fields",
              fieldInfos: [
                { fieldName: "NAMOBJ", label: "Nama" },
                { fieldName: "WADMPR", label: "Provinsi" },
                { fieldName: "WADMKK", label: "Kabupaten" },
                { fieldName: "WADMKC", label: "Kecamatan" },
                { fieldName: "LUASHA", label: "Luas (ha)" },
                { fieldName: "REMARK", label: "Deskripsi" },
              ],
            },
          ],
        },
        renderer: {
          type: cfg.type,
          field: "NAMOBJ",
          uniqueValueInfos,
          defaultSymbol: cfg.defaultSymbol.toJSON(),
        },
      });

      map.add(layer);
    });

    const view = new MapView({
      container: mapRef.current!,
      map,
      center: [98.4, 3.1],
      zoom: 11,
    });

    const homeWidget = new Home({ view });
    view.ui.add(homeWidget, "top-left");

    const searchWidget = new Search({ view });
    const searchExpand = new Expand({
      view,
      content: searchWidget,
      expandTooltip: "Cari Lokasi",
      expandIcon: "search",
      expanded: false,
    });
    view.ui.add(searchExpand, "top-right");

    // Buat kontainer div untuk kontrol layer
    const layerControlContainer = document.createElement("div");
    layerControlContainer.className = "esri-widget p-2 bg-white";
    layerControlContainer.style.maxHeight = "300px";
    layerControlContainer.style.overflowY = "auto";

    // Checkbox: Tampilkan Semua Layer
    const showAllDiv = document.createElement("div");
    showAllDiv.className = "form-check mb-2";

    const showAllInput = document.createElement("input");
    showAllInput.type = "checkbox";
    showAllInput.className = "form-check-input";
    showAllInput.id = "showAllLayers";
    showAllInput.checked = Object.values(layerVisibility).every((v) => v);

    const showAllLabel = document.createElement("label");
    showAllLabel.className = "form-check-label fw-bold";
    showAllLabel.htmlFor = "showAllLayers";
    showAllLabel.innerText = "Tampilkan Semua Layer";

    showAllInput.onchange = (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      const updatedVisibility = Object.fromEntries(
        layerConfigs.map((cfg) => [cfg.id, checked])
      );
      setLayerVisibility(updatedVisibility);

      // Update semua checkbox layer individual
      layerConfigs.forEach((layer) => {
        const checkbox = document.getElementById(layer.id) as HTMLInputElement;
        if (checkbox) checkbox.checked = checked;
      });
    };

    showAllDiv.appendChild(showAllInput);
    showAllDiv.appendChild(showAllLabel);
    layerControlContainer.appendChild(showAllDiv);

    // Masukkan checkbox untuk masing-masing layer
    layerConfigs.forEach((layer) => {
      const div = document.createElement("div");
      div.className = "form-check";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.className = "form-check-input";
      input.id = layer.id;
      input.checked = layerVisibility[layer.id];
      input.onchange = (e) => {
        const checked = (e.target as HTMLInputElement).checked;

        const updated = {
          ...layerVisibility,
          [layer.id]: checked,
        };
        setLayerVisibility(updated);

        // Jika semua layer dicentang, centang juga "Tampilkan Semua"
        const allChecked = layerConfigs.every((cfg) => updated[cfg.id]);
        const showAllCheckbox = document.getElementById(
          "showAllLayers"
        ) as HTMLInputElement;
        if (showAllCheckbox) showAllCheckbox.checked = allChecked;
      };

      const label = document.createElement("label");
      label.className = "form-check-label";
      label.htmlFor = layer.id;
      label.innerText = `Tampilkan ${layer.title}`;

      div.appendChild(input);
      div.appendChild(label);
      layerControlContainer.appendChild(div);
    });

    // Tambahkan ke Expand Widget
    const layerExpand = new Expand({
      view,
      content: layerControlContainer,
      expandIcon: "layers",
      expandTooltip: "Pilih Layer",
    });

    view.ui.add(layerExpand, "top-left");

    const basemapGallery = new BasemapGallery({
      view: view,
    });

    const basemapExpand = new Expand({
      view: view,
      content: basemapGallery,
      expandIcon: "basemap", // icon bawaan
      expandTooltip: "Pilih Basemap",
    });

    view.ui.add(basemapExpand, "top-left");

    return () => {
      view.destroy();
    };
  }, [layerVisibility]);

  return (
    <>
      <Hero title="TATA RUANG" />
      <h2 className="text-center fw-bold m-4">Tata Ruang Kabupaten Karo</h2>

      <div className="container position-relative">
        <div className="viewDiv" ref={mapRef}></div>
      </div>

      <br />
    </>
  );
}

export default TataRuang;
