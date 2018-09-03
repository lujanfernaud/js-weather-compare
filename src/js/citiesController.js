class CitiesController {
  constructor(app) {
    this.app = app
  }

  async updateCity(id, city) {
    const cityUI = this._selectCityUI(id)
    const data = await this._getDataFor(city)

    return cityUI.render(data)
  }

  // private

  _selectCityUI(id) {
    return id === 1 ? this.app.city1UI : this.app.city2UI
  }

  _getDataFor(city) {
    return this.app.weatherAPI.getData(city)
  }
}

export default CitiesController
