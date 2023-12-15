//65130500082 Soranut Sangroongruang
import { createGuestList } from './data/guestdata.js'
// const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const click = document.getElementById("add-guest-btn")
    click.addEventListener("click",addGuest)
    const keyword = document.getElementById("search-input")
    keyword.addEventListener("keyup",searchGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const parent = document.getElementById("display-area")
    const div = document.createElement("div")
    const guestname = document.createElement("span")
    guestname.textContent = `${guestItem.firstname} ${guestItem.lastname}`
    const guest = document.createElement("span")
    guest.className = "remove-icon"
    guest.id = `${guestItem.firstname}-${guestItem.lastname}`
    guest.style.cursor = "pointer"
    guest.style.color = "red"
    guest.textContent = "[x]"
    parent.appendChild(div)
    div.appendChild(guestname)
    div.appendChild(guest)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const displayarea = document.getElementById("display-area")
    displayarea.textContent = " "
    guestResult.forEach((element) => displayGuest(element))
  }
  // 4. Function to search and display matching guests
  function searchGuest(event = new Event) {
    const search = event.target.value
    displayGuests(guestList.searchGuests(search))
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstname = document.getElementById("firstname-input").value
    const lastname = document.getElementById("lastname-input").value
    guestList.addNewGuest(`${firstname}`,`${lastname}`)
    displayGuest({firstname,lastname})
  }

  // 6. Function to remove a guest
  function removeGuest(event = new Event()) {
    const parentNode = event.target.parentNode
    const [firstname, lastname] = event.target.getAttribute("id").split("-")
    parentNode.remove()
    guests.removeGuest({firstname, lastname})
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
