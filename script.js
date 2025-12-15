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
    document.querySelector(".weather").classList.remove("active");
    document.querySelector(".error").classList.add("active");
    document.querySelector(".error").innerHTML = data.message;
    return;
  }

  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
    document.querySelector(".main-wrp").style.background =
      "linear-gradient(135deg, #74ebd5, #9face6)";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
    document.querySelector(".main-wrp").style.background =
      "linear-gradient(135deg, #ff9a9e, #fad0c4)";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
    document.querySelector(".main-wrp").style.background =
      "linear-gradient(135deg, #5f9cff, #6b7cff)";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
    document.querySelector(".main-wrp").style.background =
      "linear-gradient(135deg, #141e30, #243b55)";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
    document.querySelector(".main-wrp").style.background =
      "linear-gradient(135deg, #89f7fe, #66a6ff)";
  }

  document.querySelector(".weather").classList.add("active");
  document.querySelector(".error").classList.remove("active");
}
