import { getData, processData } from "./handleWeatherData";
import renderCard from "./weatherCard";

const mainSection = document.querySelector("main");

export default async function displayWeather(loc, isCelsiusSelected) {
  const location = loc || "bangalore";
  const data = await getData(location, isCelsiusSelected);
  const result = processData(data);

  if (!result) return;
  mainSection.textContent = "";

  renderCard(mainSection, result, isCelsiusSelected);
}
