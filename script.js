const apikey = `a13dab69bc10fb176fb1e0fa578db379`;

const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const weatherIcon = document.querySelector(".weather-icon");

searchButton.addEventListener("click", function () {
  checkweather(searchInput.value);
  console.log(searchInput.value);
});

async function checkweather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
  let response = await fetch(apiURL);
  let data = await response.json();

  console.log(data);

  if (data.cod === "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").innerHTML = data.message;
    return;
  }

  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}
