import displayWeather from "./displayWeather";

const toggleBtn = document.querySelector(".toggle-unit");
const celsius = document.querySelector("#celsius-unit");
const fahrenheit = document.querySelector("#fahrenheit-unit");

export default function handleUnitToggleBtn() {
  toggleBtn.addEventListener("click", () => {
    const searchedLocation = document.querySelector("#location").value;

    const isCelsiusSelected = celsius.classList.toggle("select-unit");
    fahrenheit.classList.toggle("select-unit", !isCelsiusSelected);

    displayWeather(searchedLocation, isCelsiusSelected);
  });
}
