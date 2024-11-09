export async function getData(location, isCelsiusSelected) {
  const apiKey = "NQKN5AVWBNRCTF8RZJK8UMLCS";
  const unit = isCelsiusSelected ? "metric" : "us";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}&unitGroup=${unit}`;

  try {
    const response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Format of the API is incorrect.");
        case 401:
          throw new Error("There is a problem with the API key.");
        case 404:
          throw new Error(
            "The request cannot be matched to any valid API request endpoint structure.",
          );
        case 429:
          throw new Error("Too many requests.");
        case 500:
          throw new Error(
            "A general error has occurred processing the request.",
          );
        default:
          throw new Error(`Response status: ${response.status}`);
      }
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
}

export function processData(json) {
  if (!json) return;

  const {
    resolvedAddress = "Unknown location",
    description = "No description available",
    currentConditions: {
      conditions = "N/A",
      feelslike = "N/A",
      humidity = "N/A",
      pressure = "N/A",
      temp = "N/A",
      visibility = "N/A",
      windspeed = "N/A",
      dew = "N/A",
      icon = "N/A",
    },
  } = json;

  const myWeatherData = {
    resolvedAddress,
    description,
    conditions,
    feelslike,
    humidity,
    pressure,
    temp,
    visibility,
    windspeed,
    dew,
    icon,
  };

  return myWeatherData;
}
