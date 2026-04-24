// === КОНФИГУРАЦИЯ ===
// ВНИМАНИЕ: Токен виден в коде сайта. Это нормально для бесплатных сайтов, 
// но не используйте этого бота для важных личных переписок.
const TG_BOT_TOKEN = '8653900483:AAGjQ5qhrX3odmnLQIndK5THOVPKWaxrcGY'; 

// ВНИМАНИЕ: Замените это число на ВАШ личный ID (узнайте через @userinfobot)
// Сейчас стоит ID бота, сообщения будут уходить в никуда.
const TG_CHAT_ID = '748296626'; 

// === ДАННЫЕ УСЛУГ (Обновленные цены) ===
const services = [
    { id: 1, name: 'Обложка товара', price: 2000, desc: 'Композиция, ретушь, фон, адаптив, 2 варианта, до 3 правок', type: 'covers' },
    { id: 2, name: 'Инфографика (1 слайд)', price: 1500, desc: 'Визуализация преимуществ, иконки, схемы, адаптив, до 2 правок', type: 'infographics' },
    { id: 3, name: 'SEO-описание', price: 2500, desc: 'Ключевые слова, структура, уникальность 90%+, до 1500 зн., до 2 правок', type: 'text' },
    { id: 4, name: 'Видеообложка', price: 4000, desc: 'Монтаж до 15 сек, ракурсы, субтитры, формат WB/Ozon, до 2 правок', type: 'video' },
    { id: 5, name: 'Рич-контент (1 блок)', price: 3500, desc: 'Структура, текст+визуал, адаптивная верстка, до 2 правок', type: 'rich' },
    { id: 6, name: 'Аудит карточки', price: 3000, desc: 'Анализ оформления, читаемости, требований, рекомендации, отчет', type: 'audit' },
    { id: 7, name: 'Пакет «Старт»', price: 8000, desc: '1 карточка полностью: обложка, 3 слайда, описание, рич-контент', type: 'complex', isPackage: true },
    { id: 8, name: 'Пакет «Оптима»', price: 35000, desc: '5 карточек: обложки, 15 слайдов, описания, рич-контент, единый стиль', type: 'complex', isPackage: true },
    { id: 9, name: 'Пакет «Масштаб»', price: 58000, desc: '8 карточек: полный цикл + 2 видеообложки, брендбук, приоритет, 5 дней', type: 'complex', isPackage: true }
];

// Данные портфолио (заглушки)
const portfolioData = {
    covers: [
        { img: 'images/portfolio/covers/1.jpg', title: 'Косметика' },
        { img: 'images/portfolio/covers/2.jpg', title: 'Электроника' },
        { img: 'images/portfolio/covers/3.jpg', title: 'Одежда' }
    ],
    infographics: [
        { img: 'images/portfolio/infographics/1.jpg', title: 'Характеристики' },
        { img: 'images/portfolio/infographics/2.jpg', title: 'Преимущества' },
        { img: 'images/portfolio/infographics/3.jpg', title: 'Инструкция' }
    ],
    rich: [
        { img: 'images/portfolio/rich/1.jpg', title: 'Сравнение' },
        { img: 'images/portfolio/rich/2.jpg', title: 'Состав' },
        { img: 'images/portfolio/rich/3.jpg', title: 'Применение' }
    ],
    video: [
        { img: 'images/portfolio/video/1.jpg', title: 'Динамика' },
        { img: 'images/portfolio/video/2.jpg', title: 'Обзор' }
    ],
    complex: [
        { img: 'images/portfolio/complex/1.jpg', title: 'Пакет Старт' },
        { img: 'images/portfolio/complex/2.jpg', title: 'Пакет Оптима' },
        { img: 'images/portfolio/complex/3.jpg', title: 'Пакет Масштаб' }
    ]
};

// === КОРЗИНА ===
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    container.innerHTML = services.map(s => {
        const inCart = cart.some(i => i.id === s.id);
        const portfolioLink = s.isPackage ? 'portfolio.html#port-complex' : `portfolio.html#port-${s.type}`;
        const btnText = inCart ? 'В корзине' : 'В корзину';
        const btnClass = inCart ? 'btn-add added' : 'btn-add';
        
        return `
            <div class="service-card" id="service-${s.id}">
                <div class="card-visual">Превью</div>
                <div class="card-body">
                    <div class="card-title">${s.name}</div>
                    <div class="card-price">${s.price.toLocaleString()} ₽</div>
                    <div class="card-desc">
                        ${s.desc}
                        ${!s.isPackage ? `<ul><li>Срок: 1-3 дня</li><li>Формат: PSD/PNG</li></ul>` : ''}
                    </div>
                    <button class="${btnClass}" onclick="toggleCart(${s.id})">${btnText}</button>
                    ${!s.isPackage ? `<a href="${portfolioLink}" class="btn-portfolio">Посмотреть примеры →</a>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function toggleCart(id) {
    const service = services.find(s => s.id === id);
    const idx = cart.findIndex(i => i.id === id);
    idx > -1 ? cart.splice(idx, 1) : cart.push(service);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderServices();
    updateCartUI();
}

function updateCartUI() {
    const total = cart.reduce((s, i) => s + i.price, 0);
    const headerTotal = document.getElementById('header-total');
    const modalTotal = document.getElementById('modal-total');
    if(headerTotal) headerTotal.textContent = total.toLocaleString() + ' ₽';
    if(modalTotal) modalTotal.textContent = total.toLocaleString() + ' ₽';
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    const container = document.getElementById('cart-items');
    if (!modal || !container) return;
    
    container.innerHTML = cart.length === 0 
        ? '<p style="text-align:center; color:var(--text-sec); padding:20px;">Корзина пуста</p>'
        : cart.map(i => `<div class="cart-item"><span>${i.name}</span><span>${i.price.toLocaleString()} ₽</span></div>`).join('');
        
    modal.classList.add('open');
    updateCartUI();
}

function closeCart() {
    document.getElementById('cart-modal').classList.remove('open');
}

async function checkout() {
    if (cart.length === 0) return;
    const btn = document.getElementById('checkout-btn');
    btn.textContent = 'Отправка...';
    btn.disabled = true;

    const total = cart.reduce((s, i) => s + i.price, 0);
    const msg = `<b>Заказ с сайта КартПлейс</b>\n\n` + 
                cart.map(i => `️ ${i.name} — ${i.price} ₽`).join('\n') + 
                `\n\n<b>Итого: ${total} ₽</b>`;

    try {
        await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ chat_id: TG_CHAT_ID, text: msg, parse_mode: 'HTML' })
        });
        alert('Заказ отправлен в Telegram');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        closeCart();
        renderServices();
        updateCartUI();
    } catch (e) {
        alert('Ошибка отправки. Проверьте консоль (F12) и настройки бота.');
    } finally {
        btn.textContent = 'Оформить в Telegram';
        btn.disabled = false;
    }
}

// === МЕНЮ ===
function toggleMenu() {
    document.getElementById('menu-overlay').classList.toggle('open');
}
function closeMenu(e) {
    if (e.target === e.currentTarget) toggleMenu();
}

// === НАВИГАЦИЯ ПОРТФОЛИО ===
function initPortfolioNav() {
    const nav = document.getElementById('portfolio-nav');
    if (!nav) return;
    const links = nav.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.portfolio-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                const id = entry.target.getAttribute('id');
                const activeLink = nav.querySelector(`a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
}

function renderPortfolio() {
    Object.keys(portfolioData).forEach(key => {
        const grid = document.getElementById(`grid-${key}`);
        if (!grid) return;
        grid.innerHTML = portfolioData[key].map(item => `
            <div class="portfolio-item">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
            </div>
        `).join('');
    });
}

// === ИНИЦИАЛИЗАЦИЯ ===
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderPortfolio();
    updateCartUI();
    initPortfolioNav();
});