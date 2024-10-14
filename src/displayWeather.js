import { getData, processData } from "./handleWeatherData";
import createElement from "./domUtil";

const mainSection = document.querySelector("main");

export default async function displayWeather(loc) {
  const location = loc || "bangalore";
  const data = await getData(location);
  const result = processData(data);

  if (!result) return;
  mainSection.textContent = "";

  const container = createElement("div", { class: "weather-data card" });
  const mainDataContainer = createElement("div", {
    class: "main-data-container",
  });
  const tempDataContainer = createElement("div");
  const sideContainer = createElement("div");
  const tempData = createElement(
    "p",
    { class: "temp-data" },
    `${Math.round(result.temp)}°C`,
  );
  const conditionsData = createElement(
    "p",
    { class: "conditions-data poppins-bold" },
    result.conditions,
  );
  const feelsLikeData = createElement(
    "p",
    { class: "feels-like-data" },
    `Feels Like ${Math.round(result.feelslike)}°C`,
  );
  const locationIcon = createElement(
    "span",
    { class: "material-icons location-icon" },
    "location_on",
  );
  const locationDataContainer = createElement("div", {
    class: "location-container",
  });
  const locationDataText = document.createTextNode(result.resolvedAddress);
  const description = document.createTextNode(result.description);

  locationDataContainer.appendChild(locationIcon);
  locationDataContainer.appendChild(locationDataText);

  tempDataContainer.appendChild(tempData);

  sideContainer.appendChild(conditionsData);
  sideContainer.appendChild(feelsLikeData);

  mainDataContainer.appendChild(tempDataContainer);
  mainDataContainer.appendChild(sideContainer);

  container.appendChild(locationDataContainer);
  container.appendChild(mainDataContainer);
  container.appendChild(description);

  mainSection.appendChild(container);
}
