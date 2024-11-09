import { appendChildren, createElement } from "./domUtil";
import forecastCard from "./forecastCard";

export default function showExtendedForecast(parentElement, data) {
  const headingPara = createElement(
    "p",
    { class: "forecast-heading poppins-bold" },
    "10 day forecast",
  );
  const forecastContainer = createElement("div", {
    class: "forecast-container",
  });

  data.forEach((day) => {
    forecastContainer.appendChild(forecastCard(day));
  });

  appendChildren(parentElement, headingPara, forecastContainer);
}
