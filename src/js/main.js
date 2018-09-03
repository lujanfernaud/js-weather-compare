import Form from './form'
import WeatherAPI from './weatherAPI'
import CitiesController from './citiesController'
import CityUI from './cityUI'

class App {
  constructor() {
    this.form = new Form(this)
    this.weatherAPI = new WeatherAPI()
    this.citiesController = new CitiesController(this)
    this.city1UI = new CityUI(1)
    this.city2UI = new CityUI(2)
  }

  start() {
    this.form.watch()
    this._setSampleData()
  }

  // private

  _setSampleData() {
    this.citiesController.updateCity(1, 'Santa Cruz de Tenerife')
    this.citiesController.updateCity(2, 'London')
  }
}

new App().start()
