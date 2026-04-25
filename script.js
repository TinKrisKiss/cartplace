// === КОНФИГУРАЦИЯ ===
const TG_BOT_TOKEN = '8653900483:AAGjQ5qhrX3odmnLQIndK5THOVPKWaxrcGY'; 
const TG_CHAT_ID = '748296626';

// === ОБЩИЙ ПУЛ ПРИМЕРОВ РАБОТ ===
const portfolioPool = [
    'images/portfolio/covers/1.jpg', 'images/portfolio/covers/2.jpg',
    'images/portfolio/infographics/1.jpg', 'images/portfolio/infographics/2.jpg',
    'images/portfolio/rich/1.jpg', 'images/portfolio/rich/2.jpg',
    'images/portfolio/video/1.jpg', 'images/portfolio/video/2.jpg'
];

// === БАЗА ДАННЫХ УСЛУГ ===
const services = [
    { 
        id: 1, name: 'Обложка товара', price: 2000, type: 'covers',
        image: 'images/services/cover-1.jpg',
        description: 'Профессиональное оформление главной фотографии товара для повышения CTR и кликабельности в каталоге.',
        features: ['Разработка композиции', 'Ретушь и цветокоррекция', 'ИИ-генерация товара в интерьере', 'Создание фона', 'Адаптация под мобильные устройства', 'До 2 правок'],
        timeline: '2 дня', deliverable: '1 изображение в формате JPG'
    },
    { 
        id: 2, name: 'Инфографика', price: 1500, type: 'infographics',
        image: 'images/services/cover-2.jpg',
        description: 'Визуализация преимуществ товара для быстрого восприятия покупателем информации о продукте.',
        features: ['Визуализация преимуществ товара', 'Создание иконок и схем', 'Акценты на ключевых характеристиках', 'Читаемость на мобильных устройствах', 'До 2 правок'],
        timeline: '2 дня', deliverable: '1 изображение в формате JPG'
    },
    { 
        id: 3, name: 'SEO-описание товара', price: 2500, type: 'text',
        image: 'images/services/cover-3.jpg',
        description: 'Продающий текст с ключевыми словами для поднятия карточки в поиске Wildberries и Ozon.',
        features: ['Подбор ключевых слов (до 10 запросов)', 'Структурированный текст с абзацами', 'Уникальность 90%', 'Соответствие требованиям маркетплейса', 'До 1500 знаков (оптимально для Озон и ВБ)', 'До 2 правок'],
        timeline: '1 день', deliverable: 'Готовый текст в формате TXT'
    },
    { 
        id: 4, name: 'Видеообложка', price: 4000, type: 'video',
        image: 'images/services/cover-4.jpg',
        description: 'Динамичное видео для привлечения внимания в ленте выдачи и демонстрации товара в действии.',
        features: ['ИИ-генерация сцен', 'Монтаж динамичного видео', 'Демонстрация товара с разных ракурсов', 'Наложение субтитров', 'Фоновая музыка и озвучка (опционально)', 'До 2 правок'],
        timeline: '3 дня', deliverable: 'Видео до 20 секунд в формате mp4'
    },
    { 
        id: 5, name: 'Рич-контент', price: 3500, type: 'rich',
        image: 'images/services/cover-5.jpg',
        description: 'Яркая витрина внутри карточки товара для повышения доверия к бренду и увеличения конверсии.',
        features: ['Разработка структуры блока', 'Текст + визуальные элементы', 'Адаптивная вёрстка под маркетплейс', 'До 2 правок'],
        timeline: '2 дня', deliverable: '2 изображения (для ПК и мобильной версии) одного блока в формате JPG'
    },
    { 
        id: 6, name: 'Аудит карточки товара', price: 3000, type: 'audit',
        image: 'images/services/cover-6.jpg',
        description: 'Полный разбор текущей карточки с рекомендациями по росту продаж и улучшению дизайна.',
        features: ['Анализ текущего оформления', 'Проверка читаемости на мобильных', 'Соответствие требованиям площадки', 'Рекомендации по улучшению конверсии', 'Отчёт с примерами улучшений'],
        timeline: '2 дня', deliverable: 'Презентация в формате PDF'
    },
    { 
        id: 7, name: 'Пакет «Старт»', price: 8000, type: 'complex', isPackage: true,
        image: 'images/services/cover-7.jpg',
        description: 'Полное оформление одной карточки товара для быстрого старта продаж.',
        features: ['Полное оформление одной карточки', 'Обложка товара', '3 слайда инфографики', 'SEO-описание (до 1500 знаков)', '2 блока рич-контента', 'До 2 правок'],
        timeline: '4 дня', deliverable: '8 изображений в формате JPG, описание в TXT и рекомендации'
    },
    { 
        id: 8, name: 'Пакет «Оптима»', price: 35000, type: 'complex', isPackage: true,
        image: 'images/services/cover-8.jpg',
        description: 'Комплексное оформление пяти карточек в едином стиле для масштабирования.',
        features: ['Полное оформление пяти карточек', 'Обложки товаров', '3 слайда инфографики для каждого товара', 'SEO-описание (до 1500 знаков) для каждого товара', '2 блока рич-контента для каждого товара', 'До 4 правок'],
        timeline: '15 дней', deliverable: '40 изображений в формате JPG, описание в TXT и рекомендации'
    },
    { 
        id: 9, name: 'Пакет «Масштаб»', price: 58000, type: 'complex', isPackage: true,
        image: 'images/services/cover-9.jpg',
        description: 'Масштабное оформление восьми карточек для полного заполнения магазина.',
        features: ['Полное оформление восьми карточек', 'Обложки товаров', '3 слайда инфографики для каждого товара', 'SEO-описание (до 1500 знаков) для каждого товара', '2 блока рич-контента для каждого товара', 'До 4 правок'],
        timeline: '24 дня', deliverable: '64 изображения в формате JPG, описание в TXT и рекомендации'
    }
];

// Данные портфолио (для страницы portfolio.html)
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

// === ОБЩИЕ ФУНКЦИИ ===
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

function toggleMenu() {
    const menu = document.getElementById('menu-overlay');
    if(menu) menu.classList.toggle('open');
}

function closeMenu(e) {
    if (e.target === e.currentTarget) toggleMenu();
}

async function checkout() {
    if (cart.length === 0) return;
    const btn = document.getElementById('checkout-btn');
    btn.textContent = 'Отправка...';
    btn.disabled = true;

    const total = cart.reduce((s, i) => s + i.price, 0);
    const msg = `<b>Заказ с сайта КартПлейс</b>\n\n` + 
                cart.map(i => `▫️ ${i.name} — ${i.price} ₽`).join('\n') + 
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
        if(document.getElementById('services-container')) initIndexPage();
        else if(document.getElementById('service-detail-content')) renderServicePage();
        updateCartUI();
    } catch (e) {
        alert('Ошибка отправки. Проверьте консоль (F12).');
    } finally {
        btn.textContent = 'Оформить в Telegram';
        btn.disabled = false;
    }
}

function toggleCart(id) {
    const service = services.find(s => s.id === id);
    const idx = cart.findIndex(i => i.id === id);
    idx > -1 ? cart.splice(idx, 1) : cart.push(service);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    if(document.getElementById('services-container')) {
        initIndexPage();
    } else {
        renderServicePage();
    }
    updateCartUI();
}

// Открытие lightbox для изображений
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add('open');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.classList.remove('open');
    }
}

// === ЛОГИКА ГЛАВНОЙ СТРАНИЦЫ ===
function initIndexPage() {
    const container = document.getElementById('services-container');
    if (!container) return;

    container.innerHTML = services.map(s => {
        const inCart = cart.some(i => i.id === s.id);
        const btnText = inCart ? 'В корзине' : 'В корзину';
        const btnClass = inCart ? 'btn-add added' : 'btn-add';
        const imageHtml = s.image 
            ? `<img src="${s.image}" alt="${s.name}" onerror="this.parentElement.innerHTML='Нет фото'">` 
            : 'Нет фото';
        
        return `
            <div class="service-card" onclick="window.location.href='service.html?id=${s.id}'">
                <div class="card-visual">${imageHtml}</div>
                <div class="card-body">
                    <div class="card-title">${s.name}</div>
                    <div class="card-price">${s.price.toLocaleString()} ₽</div>
                    <div class="card-actions" onclick="event.stopPropagation()">
                        <button class="${btnClass}" onclick="toggleCart(${s.id})">${btnText}</button>
                        <a href="service.html?id=${s.id}" class="btn-details">Подробнее</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// === ЛОГИКА СТРАНИЦЫ УСЛУГИ ===
function renderServicePage() {
    const container = document.getElementById('service-detail-content');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const service = services.find(s => s.id === id);

    if (!service) {
        container.innerHTML = '<p>Услуга не найдена. <a href="index.html">Вернуться на главную</a></p>';
        return;
    }

    const inCart = cart.some(i => i.id === id);
    const btnText = inCart ? 'Уже в корзине' : 'Заказать услугу';
    const btnClass = inCart ? 'btn-order-service added' : 'btn-order-service';

    // Берем 4 примера работ
    const examplesHtml = portfolioPool.slice(0, 4).map((imgPath, index) => `
        <div class="service-example-item" onclick="openLightbox('${imgPath}')">
            <img src="${imgPath}" alt="Пример работы ${index + 1}" onerror="this.style.display='none'">
        </div>
    `).join('');

    container.innerHTML = `
        <a href="index.html" class="detail-back-link">← Все услуги</a>
        
        <div class="detail-top-grid">
            <!-- Слева: уменьшенное изображение 3:4 -->
            <div class="detail-image-small">
                <img src="${service.image || ''}" alt="${service.name}" onerror="this.parentElement.style.display='none'">
            </div>
            
            <!-- Справа: описание и блок с ценой/сроками -->
            <div class="detail-info-right">
                <div>
                    <h1 class="detail-title">${service.name}</h1>
                    <p class="detail-desc">${service.description}</p>
                </div>
                
                <div class="detail-info-block">
                    <div class="detail-price-in-block">${service.price.toLocaleString()} ₽</div>
                    <div class="info-item">
                        <div class="info-label">Срок выполнения</div>
                        <div class="info-value">${service.timeline}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Что вы получите</div>
                        <div class="info-value">${service.deliverable}</div>
                    </div>
                    <button class="${btnClass}" onclick="toggleCart(${service.id})">${btnText}</button>
                </div>
            </div>
        </div>

        <!-- Что входит в услугу (под изображением) -->
        <div class="detail-section">
            <h3>Что входит в услугу:</h3>
            <ul>
                ${service.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>

        <!-- 4 Примера работ (кликабельные) -->
        <div class="service-examples-title">Примеры работ:</div>
        <div class="service-examples-grid">
            ${examplesHtml}
        </div>

        <!-- Ссылка "Все услуги" внизу -->
        <div style="text-align:center; margin-top:50px;">
            <a href="index.html" class="all-services-link">← Вернуться к списку всех услуг</a>
        </div>
    `;
}

// === ЛОГИКА ПОРТФОЛИО ===
function renderPortfolio() {
    Object.keys(portfolioData).forEach(key => {
        const grid = document.getElementById(`grid-${key}`);
        if (!grid) return;
        grid.innerHTML = portfolioData[key].map(item => {
            if (key === 'video' && item.img.endsWith('.mp4')) {
                return `<div class="portfolio-item"><video src="${item.img}" muted loop playsinline loading="lazy"></video></div>`;
            }
            return `<div class="portfolio-item" onclick="openLightbox('${item.img}')"><img src="${item.img}" alt="${item.title}" loading="lazy"></div>`;
        }).join('');
    });
}

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

// === ЗАПУСК ===
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    renderPortfolio();
    initPortfolioNav();
    
    if (document.getElementById('services-container')) {
        initIndexPage();
    }
    if (document.getElementById('service-detail-content')) {
        renderServicePage();
    }
});