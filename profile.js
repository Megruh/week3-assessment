const colorBtn = document.querySelector("#color")
const placeBtn = document.querySelector("#place")
const ritualBtn = document.querySelector("#ritual")
const skillBtn = document.querySelector('#skill-button')

const favColor = (event) => {
	alert("My favorite color is black")
  }
  colorBtn.addEventListener("click", favColor)

  const favPlace = (event) => {
	alert("My favorite place is in Filch's arms")
  }
  placeBtn.addEventListener("click", favPlace)

  const favRitual = (event) => {
	alert("My favorite ritual is hunting down disobedient students")
  }
  ritualBtn.addEventListener("click", favRitual)

  const skillsAdd = (event) => {
	event.preventDefault()
    alert('Thank you for reminding me of yet another one of my many skills')

    skillBtn.value = ''
  }
  skillBtn.addEventListener("click", skillsAdd)