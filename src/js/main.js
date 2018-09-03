import Form from './form'
import WeatherAPI from './weatherAPI'
import CityModel from './cityModel'
import CitiesController from './citiesController'
import CityUI from './cityUI'

class App {
  constructor() {
    this.form = new Form(this)
    this.weatherAPI = new WeatherAPI()
    this.cityModel = new CityModel(this)
    this.citiesController = new CitiesController(this)
    this.city1UI = new CityUI(1)
    this.city2UI = new CityUI(2)
  }

  start() {
    this.form.watch()
  }
}

new App().start()
