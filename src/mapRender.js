import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { createElement } from "./domUtil";

function renderMap(parentElement, lat, lng) {
  const mapDiv = createElement("div", { id: "map" });
  parentElement.appendChild(mapDiv);

  let map = L.map("map", {
    dragging: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
  }).setView([lat, lng], 13);

  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}",
    {
      minZoom: 10,
      maxZoom: 12,
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ext: "png",
    },
  ).addTo(map);
}

export default renderMap;
