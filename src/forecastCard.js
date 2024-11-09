import { appendChildren, createElement } from "./domUtil";
import formatDate from "./formatDate";
import weatherIcons from "./getIcons";

export default function forecastCard(data) {
  const { datetime, conditions, feelslike, temp, icon } = data;
  const formattedDate = formatDate(datetime);

  const frag = document.createDocumentFragment();
  const container = createElement("div", { class: "forecast-card" });
  const datetimeData = createElement("p", {}, formattedDate);
  const foreCastContainer = createElement("div", {
    class: "forecast-data-container",
  });
  const iconContainer = createElement("div");
  const weatherIcon = createElement("img", {
    class: "weather-icon",
    src: weatherIcons[`${icon}.png`],
  });
  const tempDataContainer = createElement("div");
  const tempData = createElement(
    "p",
    { class: "poppins-bold" },
    `${Math.round(temp)}°`,
  );
  const feelslikeData = createElement("p", {}, `${Math.round(feelslike)}°`);

  iconContainer.appendChild(weatherIcon);
  appendChildren(tempDataContainer, tempData, feelslikeData);
  appendChildren(foreCastContainer, iconContainer, tempDataContainer);
  appendChildren(frag, datetimeData, foreCastContainer);
  container.appendChild(frag);

  return container;
}
