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

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 10,
    maxZoom: 12,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}

export default renderMap;
