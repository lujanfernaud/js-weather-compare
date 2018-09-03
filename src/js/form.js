class Form {
  constructor(app) {
    this.app = app
    this.inputCity1 = document.getElementById('input-city-1')
    this.inputCity2 = document.getElementById('input-city-2')
    this.submitButton = document.getElementById('submit')
  }

  watch() {
    this.submitButton.addEventListener('click', event => {
      event.preventDefault()

      this._updateCities()
    })
  }

  // private

  _updateCities() {
    const city1 = this.inputCity1.value
    const city2 = this.inputCity2.value

    this.app.citiesController.updateCity(1, city1)
    this.app.citiesController.updateCity(2, city2)
  }
}

export default Form
