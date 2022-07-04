let menuButton = document.getElementById('menu-button')
let layerMenu = document.querySelector('.layerMenu')
let layerMenuLink = document.querySelectorAll('a')

// Toggle menu button
menuButton.addEventListener('click', function () {
    if (layerMenu.style.display != 'flex') {
        layerMenu.style.display = 'flex'
        this.textContent = '⬅️'
    } else {
        layerMenu.style.display = 'none'
        this.textContent = '➡️'
    }
})

// Links menu
layerMenuLink.forEach(element => {
    element.addEventListener('click', function () {
        layerMenu.style.display = 'none'
        menuButton.textContent = '➡️'
    })
});