import { appendChildren, createElement } from "./domUtil";
import formatDate from "./formatDate";

export default function forecastCard(data) {
  const { datetime, conditions, feelslike, temp } = data;
  const formattedDate = formatDate(datetime);

  const frag = document.createDocumentFragment();
  const container = createElement("div", { class: "forecast-card" });
  const datetimeData = createElement("p", {}, formattedDate);
  const tempData = createElement(
    "p",
    { class: "poppins-bold" },
    `${Math.round(temp)}°`,
  );
  const feelslikeData = createElement("p", {}, `${Math.round(feelslike)}°`);

  appendChildren(frag, datetimeData, tempData, feelslikeData);
  container.appendChild(frag);

  return container;
}
