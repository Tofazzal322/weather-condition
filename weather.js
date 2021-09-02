// Search city name
const API_KEY =`2233eb9d3f5d6f262ad5b718c4b49d6d`
const searchCity = (city) => {
  const searchValue = document.getElementById("input-text");
  const searchText = searchValue.value;
  searchValue.value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeather(data));
};


const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
}

const displayWeather = (temperature) => {
  setInnerText('show-city',temperature.name)
  setInnerText('show-temp',temperature.main.temp)
  setInnerText('show-clouds',temperature.weather[0].main)
  
  // set waterher condition 
  const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

  const weatherIcon = document.getElementById('weather-icon');
  weatherIcon.setAttribute('src', url)
};
