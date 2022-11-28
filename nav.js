// const headerNav = document.querySelector('.nav-header');
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', _ => {
    document.body.classList.toggle('show')
})