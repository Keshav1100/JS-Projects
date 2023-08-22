const searchCity = document.getElementById("search-city");
const searchIcon = document.getElementById("search-icon");
const tempValue = document.getElementById("temp-value");
const weatherImage = document.getElementById("weather-image");
const cityNameValue = document.getElementById("city-name-value");
const humidityValue = document.getElementById("humidity-value");

// Add your API Key
const apiKey = "apiKey";
const windValue = document.getElementById("wind-value");
fetchWeather();

const fetchWeather = async function () {
  let city = searchCity.value;
  if (city === "") {
    city = "Delhi";
  }
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    { method: "GET" }
  );
  //   let data = await fetch(`./random.json`);
  let responseData = await data.json();
  changeValues(
    responseData["main"]["temp"],
    city,
    responseData["main"]["humidity"],
    responseData["wind"]["speed"],
    responseData["weather"][0]["main"].toLowerCase()
  );
};

function changeValues(temp, city, humidity, wind, weatherValue) {
  changeImage(weatherValue);
  tempValue.innerText = temp;
  cityNameValue.innerText = city;
  humidityValue.innerText = humidity;
  windValue.innerText = wind;
  searchCity.value = "";
}

function changeImage(weather) {
  weatherImage.setAttribute("src", `./Images/${weather}.png`);
}

searchIcon.addEventListener("click", async function (e) {
  e.preventDefault();
  fetchWeather();
});
