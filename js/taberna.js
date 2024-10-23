const carousel0 = document.querySelector(".carousel0")
const carousel1 = document.querySelector(".carousel1")
const arrowBtns = document.querySelectorAll(".arrow")
const arrowBtns1 = document.querySelectorAll(".arrow1")
const dishesCardWidth = carousel0.querySelector(".card").offsetWidth
const drinksCardWidth = carousel1.querySelector(".card").offsetWidth


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel0.scrollLeft += btn.id === "left" ? - dishesCardWidth : dishesCardWidth
    })
})

arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left1" ? - drinksCardWidth : drinksCardWidth
    })
})