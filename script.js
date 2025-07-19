const buttonToggle = document.querySelector('.buttib-toggle')
const sidebar = document.querySelector('.sidebar')
const switchCircle = document.querySelector('.theme-switch span')

switchCircle.addEventListener('click', () => {
    switchCircle.classList.toggle('right-placed')

    const switchIcon = switchCircle.querySelector('i')
    switchIcon.classList.contains('bi-brightness-low-fill')
    ? switchIcon.className = 'bi bi-moon-fill'
    : switchIcon.className = 'bi bi-brightness-low-fill'
})