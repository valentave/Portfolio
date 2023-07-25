$hamburgerBtn = document.querySelector('.hamburger-btn');
$navbar = document.querySelector('.nav');
$navItems = document.querySelectorAll('.nav-item');

$hamburgerBtn.addEventListener('click', () => {
    $navbar.classList.toggle('nav-open');
})

$navItems.forEach((item) => {
    item.addEventListener('click', () => {
        $navbar.classList.remove('nav-open');
    })
});