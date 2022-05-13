const elHamburgerBtn = document.querySelector (".site-header__hamburger")

const elHeader = document.querySelector (".site-header")

elHamburgerBtn.addEventListener ("click", () => {
    elHeader.classList.toggle (".site-header--open")
})