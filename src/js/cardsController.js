class CardsController {
  constructor(app) {
    this.app = app
  }

  async updateCard(id, city) {
    const cityCard = this._selectCityCard(id)
    const data = await this._getDataFor(city)

    return cityCard.render(data)
  }

  // private

  _selectCityCard(id) {
    return id === 1 ? this.app.city1 : this.app.city2
  }

  _getDataFor(city) {
    return this.app.weatherAPI.getData(city)
  }
}

export default CardsController
