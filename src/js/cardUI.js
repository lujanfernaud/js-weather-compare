import Icon from './icon'

class CardUI {
  constructor(id) {
    this.city = document.getElementById(`city-${id}`)
    this.status = document.getElementById(`status-${id}`)
    this.icon = document.getElementById(`icon-${id}`)
    this.temp = document.getElementById(`temp-${id}`)
  }

  render(data) {
    this.city.innerText = data.city
    this.status.innerText = data.status
    this.icon.src = new Icon(data).src()
    this.temp.innerText = `${Math.round(data.temp)} ℃`
  }
}

export default CardUI
