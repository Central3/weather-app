import displayWeather from "./displayWeather";

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

export default function handleSearch() {
  function handleSubmit(event) {
    event.preventDefault();

    const searchedLocation = searchForm.querySelector("#location").value;
    displayWeather(searchedLocation);
  }

  searchForm.addEventListener("submit", handleSubmit);

  searchBtn.addEventListener("click", () => {
    const event = new CustomEvent("submit");
    searchForm.dispatchEvent(event);
  });
}
