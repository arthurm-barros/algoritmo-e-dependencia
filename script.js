const buttonToggle = document.querySelector('.button-toggle')
const pagebar = document.querySelector('.pagebar')
const switchCircle = document.querySelector('.theme-switch span')

buttonToggle.addEventListener('click', () => {
    pagebar.classList.toggle('hidden-bar')
    buttonToggle.classList.toggle('show-bar')
})

switchCircle.addEventListener('click', () => {
    switchCircle.classList.toggle('right-placed')
    document.documentElement.classList.toggle('dark-root')

    const switchIcon = switchCircle.querySelector('i')
    switchIcon.classList.contains('bi-brightness-low-fill')
    ? switchIcon.className = 'bi bi-moon-fill'
    : switchIcon.className = 'bi bi-brightness-low-fill'
})