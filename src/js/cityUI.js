import Icon from './icon'

class CityUI {
  constructor(id) {
    this.loaderContainer = document.getElementById(`loader-${id}`)
    this.loaderCity = document.getElementById(`loader-city-${id}`)
    this.loaderStatus = document.getElementById(`loader-status-${id}`)
    this.loaderIcon = document.getElementById(`loader-icon-${id}`)
    this.loaderTemp = document.getElementById(`loader-temp-${id}`)

    this.dataContainer = document.getElementById(`data-${id}`)
    this.dataCity = document.getElementById(`data-city-${id}`)
    this.dataStatus = document.getElementById(`data-status-${id}`)
    this.dataIcon = document.getElementById(`data-icon-${id}`)
    this.dataTemp = document.getElementById(`data-temp-${id}`)
  }

  renderLoader() {
    this.dataContainer.classList.toggle('opacity-1')
    this.loaderContainer.classList.toggle('opacity-1')

    this.loaderCity.innerText = ''
    this.loaderStatus.innerText = 'Fetching data...'
    this.loaderTemp.innerText = ''
  }

  render(data) {
    this.loaderContainer.classList.toggle('opacity-1')
    this.dataContainer.classList.toggle('opacity-1')

    this.dataCity.innerText = data.name
    this.dataStatus.innerText = data.status
    this.dataIcon.src = new Icon(data).src()
    this.dataTemp.innerText = `${Math.round(data.temp)} ℃`
  }
}

export default CityUI
