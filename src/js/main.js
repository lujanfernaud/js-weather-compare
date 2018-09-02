import Form from './form'
import WeatherAPI from './weatherAPI'
import CardsController from './cardsController'
import CardUI from './cardUI'

class App {
  constructor() {
    this.form = new Form(this)
    this.weatherAPI = new WeatherAPI()
    this.cardsController = new CardsController(this)
    this.city1 = new CardUI(1)
    this.city2 = new CardUI(2)
  }

  start() {
    this.form.watch()
    this._setSampleData()
  }

  // private

  _setSampleData() {
    this.cardsController.updateCard(1, 'Santa Cruz de Tenerife')
    this.cardsController.updateCard(2, 'London')
  }
}

new App().start()
