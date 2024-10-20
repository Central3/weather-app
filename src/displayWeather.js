import { getData, processData } from "./handleWeatherData";
import showExtendedForecast from "./showExtendedForecast";
import renderMainCard from "./mainWeatherCard";

const mainSection = document.querySelector("main");

export default async function displayWeather(loc, isCelsiusSelected) {
  if (loc === "" || loc === undefined) return;

  const data = await getData(loc, isCelsiusSelected);
  const result = processData(data);

  if (!result) return;
  mainSection.textContent = "";

  renderMainCard(mainSection, result, isCelsiusSelected);
  showExtendedForecast(mainSection, data.days.slice(0, 10));
}
