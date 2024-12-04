import { getData, processData } from "./handleWeatherData";
import showExtendedForecast from "./showExtendedForecast";
import renderMainCard from "./mainWeatherCard";
import renderMap from "./mapRender";

const mainSection = document.querySelector("main");

export default async function displayData(loc, isCelsiusSelected) {
  if (loc === "" || loc === undefined) return;

  const data = await getData(loc, isCelsiusSelected);
  const result = processData(data);

  if (!data) return;
  const { latitude: lat = 0, longitude: lng = 0 } = data;

  mainSection.textContent = "";

  renderMainCard(mainSection, result, isCelsiusSelected);
  showExtendedForecast(mainSection, data.days.slice(0, 10));
  renderMap(mainSection, lat, lng);
}
