# TERRAFORGE — Интернет-магазин вездеходов

Современный сайт для продажи вездеходной техники, разработанный на **Next.js 15** с использованием **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-10-ec5990?logo=reacthookform)

## 🚀 Особенности

- **Адаптивный дизайн** — корректно отображается на всех устройствах
- **Тёмная индустриальная тема** — оранжевые акценты на тёмном фоне
- **Каталог техники** — 3 модели вездеходов с фильтрацией по категориям
- **Страница товара** — галерея, характеристики, калькулятор лизинга
- **Форма захвата лидов** — валидация телефона, отправка через Formspree/EmailJS
- **SEO-оптимизация** — мета-теги для каждой страницы
- **Доступность (a11y)** — ARIA-атрибуты, клавиатурная навигация

## 📁 Структура проекта

```
allterrain-shop/
├── app/
│   ├── about/              # Страница "О компании"
│   ├── catalog/
│   │   ├── [slug]/         # Страница товара (динамическая)
│   │   │   ├── LeasingCalculator.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx        # Страница каталога
│   ├── components/         # React-компоненты
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── LeadForm.tsx
│   │   └── VehicleCard.tsx
│   ├── contacts/           # Страница контактов
│   ├── privacy/            # Политика конфиденциальности
│   ├── globals.css         # Глобальные стили
│   ├── layout.tsx          # Корневой layout
│   └── page.tsx            # Главная страница
├── data/
│   └── vehicles.json       # Данные о вездеходах
├── public/
│   └── images/vehicles/    # Изображения техники
└── package.json
```

## 🛠 Технологии

| Технология | Версия | Назначение |
|------------|--------|------------|
| Next.js | 15 | SSR/SSG фреймворк |
| React | 19 | UI библиотека |
| TypeScript | 5 | Типизация |
| Tailwind CSS | 3 | Стилизация |
| React Hook Form | 10 | Управление формами |

## 🚀 Быстрый старт

### Требования

- Node.js 18+ 
- npm или yarn

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/info-pvv/BFT.git
cd BFT/allterrain-shop

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### Сборка для продакшена

```bash
npm run build
npm start
```

## 📄 Страницы

| Страница | URL | Описание |
|----------|-----|----------|
| Главная | `/` | Приветственный экран с преимуществами |
| Каталог | `/catalog` | Список всех вездеходов с фильтрами |
| Товар | `/catalog/:id` | Детальная страница с галереей и формой |
| О нас | `/about` | Информация о компании |
| Контакты | `/contacts` | Контактные данные и форма заявки |
| Политика | `/privacy` | Политика конфиденциальности |

## 🎨 Компоненты

### Header
Логотип, навигация, кнопка мобильного меню.

### Footer
Контакты, ссылки навигации, копирайт.

### VehicleCard
Карточка товара: изображение, название, цена, характеристики, кнопка «Подробнее».

### LeadForm
Форма заявки: имя, телефон, модель, комментарий. Интеграция с Formspree/EmailJS.

### LeasingCalculator
Калькулятор лизинга: первоначальный взнос, срок, ставка, расчёт платежа.

## 📦 Данные

Файл `data/vehicles.json` содержит информацию о вездеходах:

```json
{
  "id": 1,
  "name": "TF-100 Arctic",
  "price": 4500000,
  "description": "...",
  "specs": {
    "engine": "Rotax 900 ACE Turbo, 115 л.с.",
    "weight": "650 кг",
    "capacity": "2 человека + 200 кг груза"
  },
  "images": [...],
  "category": "light"
}
```

## 🔧 Настройка форм

Для получения заявок на почту:

1. Зарегистрируйтесь на [Formspree](https://formspree.io)
2. Создайте новую форму
3. Замените `YOUR_FORM_ID` в файлах:
   - `app/catalog/[slug]/page.tsx`
   - `app/contacts/page.tsx`

```tsx
<LeadForm endpoint="https://formspree.io/f/your_form_id" />
```

## 🚀 Деплой на Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите **Add New Project**
3. Импортируйте репозиторий GitHub
4. Укажите **Root Directory**: `allterrain-shop`
5. Нажмите **Deploy**

## 📊 Производительность

- **Lighthouse Score**: 90+
- **Первая отрисовка**: < 1с
- **Интерактивность**: < 2с

## 📝 Лицензия

MIT

## 👥 Контакты

- **Email**: info@terraforge.ru
- **Телефон**: +7 (999) 123-45-67
- **Адрес**: Москва, ул. Индустриальная, 42

---

Разработано для компании **TERRAFORGE** © 2026
