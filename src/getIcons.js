function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const weatherIcons = importAll(
  require.context("./assets/weather-icons/", false, /\.(png|jpe?g|svg)$/),
);

export default weatherIcons;
