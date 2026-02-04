// Получаем элементы
const menuToggle = document.getElementById('menuToggle');
const menuRight = document.getElementById('menuRight');

// Создаем оверлей для меню
const menuOverlay = document.createElement('div');
menuOverlay.className = 'menu-overlay';
document.body.appendChild(menuOverlay);

// Функция открытия/закрытия меню
function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    // Переключаем состояния
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuRight.classList.toggle('active');
    menuOverlay.classList.toggle('active');

    // Блокируем скролл при открытом меню
    document.body.style.overflow = menuRight.classList.contains('active') ? 'hidden' : '';
}

// Обработчики событий
menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Закрытие меню при изменении размера окна
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuRight.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Кнопка "Наверх"
const scrollTopButton = document.getElementById('scrollTop');

// Показываем/скрываем кнопку после скролле
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Плавная прокрутка вверх при клике на кнопку
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Клик по лого для прокрутки вверх
const logoLink = document.querySelector('.logo-link');
if (logoLink) {
    logoLink.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}