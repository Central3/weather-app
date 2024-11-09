import { createElement, appendChildren } from "./domUtil";
import weatherIcons from "./getIcons";

export default function renderMainCard(parentElement, data, isCelsiusSelected) {
  const containerFragment = document.createDocumentFragment();

  const container = createElement("div", { class: "weather-data card" });
  const mainDataContainer = createElement("div", {
    class: "main-data-container",
  });
  const tempDataContainer = createElement("div");
  const sideContainer = createElement("div");
  const weatherIconContainer = createElement("div");
  const weatherIcon = createElement("img", {
    class: "weather-icon",
    src: weatherIcons[`${data.icon}.png`],
  });
  const tempData = createElement(
    "p",
    { class: "temp-data" },
    `${Math.round(data.temp)}${isCelsiusSelected ? "°C" : "°F"}`,
  );
  const conditionsData = createElement(
    "p",
    { class: "conditions-data poppins-bold" },
    data.conditions,
  );
  const feelsLikeData = createElement(
    "p",
    { class: "feels-like-data" },
    `Feels Like ${Math.round(data.feelslike)}${isCelsiusSelected ? "°C" : "°F"}`,
  );
  const locationIcon = createElement(
    "span",
    { class: "material-icons location-icon" },
    "location_on",
  );
  const locationDataContainer = createElement("div", {
    class: "location-container",
  });
  const locationDataText = document.createTextNode(data.resolvedAddress);
  const description = document.createTextNode(data.description);
  const miscDataContainer = createElement("div", { class: "misc-data" });
  const windspeedContainer = createElement("div");
  const windspeedHeading = createElement(
    "span",
    { class: "data-heading" },
    "Wind",
  );
  const windspeed = document.createTextNode(
    `${data.windspeed} ${isCelsiusSelected ? "km/h" : "mph"}`,
  );
  const humidityContainer = createElement("div");
  const humidityHeading = createElement(
    "span",
    { class: "data-heading" },
    "Humidity",
  );
  const humidity = document.createTextNode(`${data.humidity}%`);
  const visibilityContainer = createElement("div");
  const visibilityHeading = createElement(
    "span",
    { class: "data-heading" },
    "Visibility",
  );
  const visibility = document.createTextNode(
    `${data.visibility} ${isCelsiusSelected ? "km" : "mi."}`,
  );
  const pressureContainer = createElement("div");
  const pressureHeading = createElement(
    "span",
    { class: "data-heading" },
    "Pressure",
  );
  const pressure = document.createTextNode(`${data.pressure} mb`);
  const dewPointContainer = createElement("div");
  const dewPointHeading = createElement(
    "span",
    { class: "data-heading" },
    "Dew Point",
  );
  const dewPoint = document.createTextNode(`${data.dew}°`);

  appendChildren(locationDataContainer, locationIcon, locationDataText);
  weatherIconContainer.appendChild(weatherIcon);
  tempDataContainer.appendChild(tempData);
  appendChildren(sideContainer, conditionsData, feelsLikeData);
  appendChildren(
    mainDataContainer,
    weatherIconContainer,
    tempDataContainer,
    sideContainer,
  );
  appendChildren(windspeedContainer, windspeedHeading, windspeed);
  appendChildren(humidityContainer, humidityHeading, humidity);
  appendChildren(visibilityContainer, visibilityHeading, visibility);
  appendChildren(pressureContainer, pressureHeading, pressure);
  appendChildren(dewPointContainer, dewPointHeading, dewPoint);
  appendChildren(
    miscDataContainer,
    windspeedContainer,
    humidityContainer,
    visibilityContainer,
    pressureContainer,
    dewPointContainer,
  );
  appendChildren(
    containerFragment,
    locationDataContainer,
    mainDataContainer,
    description,
    miscDataContainer,
  );
  container.appendChild(containerFragment);
  parentElement.appendChild(container);
}
