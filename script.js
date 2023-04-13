const apiKey = 'dec639d494b26e2d863c9e80aa1f5b63';

// get references to the HTML elements that we need to update
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const weatherIcon = document.getElementById('weather-icon');
const visibilityData = document.getElementById('visibility-data');

// function that fetches weather data and updates the HTML content
async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hr&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data); // add this line to check what data is being returned

  cityName.textContent = data.name;

  temperature.textContent = `${data.main.temp.toFixed()} °C`;
  weatherDescription.textContent = data.weather[0].description;
  visibilityData.textContent = `${data.visibility} m`;

  const iconCode = data.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.src = iconUrl;
}

// get the form and add a submit event listener
const form = document.getElementById('weather-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const input = document.getElementById('city-input');
  const city = input.value;

  fetchWeatherData(city);
  input.value = '';
});


