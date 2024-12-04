import displayData from "./displayData";

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const celsius = document.querySelector("#celsius-unit");

export default function handleSearch() {
  function handleSubmit(event) {
    event.preventDefault();

    const searchedLocation = searchForm.querySelector("#location").value;
    const isCelsiusSelected = celsius.classList.contains("select-unit");
    displayData(searchedLocation, isCelsiusSelected);
  }

  searchForm.addEventListener("submit", handleSubmit);

  searchBtn.addEventListener("click", () => {
    const event = new CustomEvent("submit");
    searchForm.dispatchEvent(event);
  });
}
