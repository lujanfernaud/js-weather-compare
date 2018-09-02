class WeatherAPI {
  constructor() {
    this.appID = 'b25d1c2355e6eb105db6c4d083c30e51'
  }

  getData(city) {
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appID}&units=metric`

    return fetch(apiURL, { mode: 'cors' })
      .then(response => response.json())
      .then(json => {
        return {
          city: json.name,
          status: json.weather[0].description,
          icon: json.weather[0].icon,
          temp: json.main.temp
        }
      })
      .then(cityData => {
        return cityData
      })
  }
}

export default WeatherAPI
