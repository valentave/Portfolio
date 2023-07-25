const $themeButton = document.querySelector('.theme-selector');
const $body = document.body;
const $logo = document.querySelector('.logo');

$themeButton.addEventListener('click', () => {
    $body.classList.toggle('dark-mode');
    if ($body.classList.contains('dark-mode')) {
        $logo.src = 'Assets/icons/vat-logo-white.webp';
    } else {
        $logo.src = 'Assets/icons/vat-logo.webp';
    }
})