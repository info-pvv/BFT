# TERRAFORGE — Вездеход «Борей»

Официальный сайт вездехода «Борей» на мостах «Волга» с КПП ВАЗ.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)

## 🚜 О продукте

**«Борей»** — надёжный вездеход для охоты, рыбалки и работы в условиях бездорожья.

### Ключевые особенности

| Характеристика | Значение |
|----------------|----------|
| Ходовая часть | Мосты «Волга» усиленные |
| КПП | ВАЗ 2110 |
| Двигатель | Lifan/Loncin 20-30 л.с. |
| Колёса | Низкого давления от «Урал» |
| Управление | Гидрообъёмное (ГУР) |
| Грузоподъёмность | 600-800 кг |

## 📦 Комплектации

| Комплектация | Цена | Основные отличия |
|--------------|------|------------------|
| **Стандарт** | 520 000 ₽ | Базовая версия: лобовое стекло, сиденье, рундуки |
| **Комфорт** | 680 000 ₽ | Тент с печкой, 2 сиденья, багажник, лебёдка, фаркоп |
| **Премиум** | 890 000 ₽ | Закрытый кузов, отопитель, приборы, шумоизоляция |

## 🚀 Быстрый старт

```bash
# Клонирование
git clone https://github.com/info-pvv/BFT.git
cd BFT/allterrain-shop

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 📁 Структура проекта

```
allterrain-shop/
├── app/
│   ├── about/              # О компании
│   ├── catalog/
│   │   ├── [slug]/         # Страница вездехода
│   │   │   ├── page.tsx
│   │   │   └── LeasingCalculator.tsx
│   │   └── page.tsx        # Каталог
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── LeadForm.tsx
│   │   └── VehicleCard.tsx
│   ├── contacts/           # Контакты
│   ├── privacy/            # Политика конфиденциальности
│   ├── layout.tsx
│   └── page.tsx            # Главная
├── data/
│   └── vehicles.json       # Данные о комплектациях
└── public/
    └── images/vehicles/    # Изображения
```

## 🔧 Настройка

### Форма заявок

Замените `YOUR_FORM_ID` в файлах:
- `app/catalog/[slug]/page.tsx`
- `app/contacts/page.tsx`

```tsx
endpoint="https://formspree.io/f/your_form_id"
```

### Контакты

Обновите контактные данные в:
- `app/components/Footer.tsx`
- `app/contacts/page.tsx`
- `app/layout.tsx` (metadata)

## 🌐 Деплой на Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. **Add New Project** → импортируйте репозиторий
3. **Root Directory**: `allterrain-shop`
4. **Deploy**

## 📊 Команды

```bash
npm run dev      # Dev-сервер
npm run build    # Сборка
npm start        # Продакшен
npm run lint     # Линтинг
```

## 📞 Контакты

- **Телефон**: +7 (999) 123-45-67
- **Email**: info@terraforge.ru
- **Адрес**: Москва, ул. Индустриальная, 42

---

**TERRAFORGE** © 2026. Вездеходы для экстремальных условий.
