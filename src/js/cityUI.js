import Icon from './icon'

class CityUI {
  constructor(id) {
    this.city = document.getElementById(`city-${id}`)
    this.status = document.getElementById(`status-${id}`)
    this.icon = document.getElementById(`icon-${id}`)
    this.temp = document.getElementById(`temp-${id}`)
  }

  render(data) {
    this.city.innerText = data.name
    this.status.innerText = data.status
    this.icon.src = new Icon(data).src()
    this.temp.innerText = `${Math.round(data.temp)} ℃`
  }
}

export default CityUI
