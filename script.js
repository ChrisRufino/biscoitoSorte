const cookie = document.querySelector(".cookie")
const footer = document.querySelector(".footer")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

cookie.addEventListener("click", handleTryClick)
footer.addEventListener("click", handleResetClick)

function handleTryClick(event) {
  event.preventDefault()

  toggleScreen()
}

function handleResetClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
