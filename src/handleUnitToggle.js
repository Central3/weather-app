const toggleBtn = document.querySelector(".toggle-unit");
const celsius = document.querySelector("#celsius-unit");
const fahrenheit = document.querySelector("#fahrenheit-unit");

export default function handleUnitToggleBtn() {
  toggleBtn.addEventListener("click", () => {
    const isCelsiusSelected = celsius.classList.toggle("select-unit");
    fahrenheit.classList.toggle("select-unit", !isCelsiusSelected);
  });
}
