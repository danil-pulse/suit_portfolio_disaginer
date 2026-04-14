# Документация проекта Portfolio Website

## Оглавление

1. [Обзор проекта](#обзор-проекта)
2. [Структура проекта](#структура-проекта)
3. [Компоненты](#компоненты)
4. [Настройка отправки формы](#настройка-отправки-формы)
5. [Локализация](#локализация)
6. [Стилизация](#стилизация)
7. [Переменные окружения](#переменные-окружения)

---

## Обзор проекта

Это портфолио-сайт на Next.js 15 с поддержкой двух языков (русский/английский), модульной архитектурой компонентов и отправкой форм в Telegram или на email.

### Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS 4** - базовые утилиты
- **CSS Modules** - изолированные стили компонентов
- **date-fns** - работа с датами
- **Lucide React** - иконки

---

## Структура проекта

```
project/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API для отправки формы
│   ├── globals.css               # Глобальные стили и CSS переменные
│   ├── layout.tsx                # Корневой layout
│   └── page.tsx                  # Главная страница
│
├── components/
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.module.css
│   │   └── index.ts
│   ├── ContactBooking/
│   │   ├── ContactBooking.tsx    # Форма контакта с выбором метода отправки
│   │   ├── ContactBooking.module.css
│   │   └── index.ts
│   ├── DesignPortfolio/
│   │   ├── DesignPortfolio.tsx
│   │   ├── DesignPortfolio.module.css
│   │   └── index.ts
│   ├── FeaturedWork/
│   │   ├── FeaturedWork.tsx
│   │   ├── FeaturedWork.module.css
│   │   └── index.ts
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   └── index.ts
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── index.ts
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   └── index.ts
│   ├── LanguageSwitcher/
│   │   ├── LanguageSwitcher.tsx
│   │   ├── LanguageSwitcher.module.css
│   │   └── index.ts
│   ├── PhotographyGallery/
│   │   ├── PhotographyGallery.tsx
│   │   ├── PhotographyGallery.module.css
│   │   └── index.ts
│   ├── Testimonials/
│   │   ├── Testimonials.tsx
│   │   ├── Testimonials.module.css
│   │   └── index.ts
│   └── ui/                       # UI компоненты (shadcn/ui)
│
├── lib/
│   ├── language-context.tsx      # Контекст для управления языком
│   ├── translations.ts           # Переводы (EN/RU)
│   └── utils.ts                  # Утилиты
│
├── public/
│   └── images/
│       └── max-logo.png          # Логотип мессенджера Max
│
└── DOCUMENTATION.md              # Эта документация
```

---

## Компоненты

Каждый компонент находится в своей папке и содержит:

- **ComponentName.tsx** - React компонент
- **ComponentName.module.css** - CSS модуль со стилями
- **index.ts** - экспорт компонента

### Пример структуры компонента

```tsx
// components/Example/Example.tsx
import styles from "./Example.module.css"

export function Example() {
  return (
    <div className={styles.example}>
      <h1 className={styles.example__title}>Заголовок</h1>
    </div>
  )
}
```

```css
/* components/Example/Example.module.css */
.example {
  padding: 2rem;
}

.example__title {
  font-size: 1.5rem;
  color: var(--foreground);
}
```

```ts
// components/Example/index.ts
export { Example } from "./Example"
```

---

## Настройка отправки формы

Форма контакта поддерживает два метода отправки: **Telegram** и **Email**. Пользователь выбирает метод в интерфейсе формы.

### 1. Отправка в Telegram

#### Шаг 1: Создание Telegram бота

1. Откройте Telegram и найдите [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/newbot`
3. Следуйте инструкциям и дайте имя боту
4. Скопируйте токен бота (например: `7123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`)

#### Шаг 2: Получение Chat ID

1. Добавьте созданного бота в группу или напишите ему лично
2. Отправьте любое сообщение боту
3. Откройте в браузере:
   ```
   https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
   ```
4. Найдите `"chat":{"id":` - это ваш Chat ID (например: `-1001234567890` для группы или `123456789` для личного чата)

#### Шаг 3: Добавление переменных окружения

В панели Vercel или в файле `.env.local`:

```env
TELEGRAM_BOT_TOKEN=7123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw
TELEGRAM_CHAT_ID=-1001234567890
```

### 2. Отправка на Email

#### Вариант A: Через Resend (рекомендуется)

1. Зарегистрируйтесь на [Resend](https://resend.com)
2. Создайте API ключ
3. Подтвердите домен для отправки
4. Добавьте переменные:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=your@email.com
```

#### Вариант B: Базовый вариант (без RESEND_API_KEY)

Если `RESEND_API_KEY` не указан, форма будет логировать данные в консоль сервера. Это полезно для тестирования.

```env
CONTACT_EMAIL=your@email.com
```

### 3. Полный список переменных окружения

```env
# Telegram (для отправки в Telegram)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Email (для отправки на почту)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
```

### 4. Как это работает

API эндпоинт `/api/contact` обрабатывает POST запросы:

```typescript
// Структура данных формы
{
  firstName: string,
  lastName: string,
  email: string,
  phone?: string,
  service?: string,
  message: string,
  date?: string,
  time?: string,
  sendMethod: "telegram" | "email"
}
```

При отправке:
- Если `sendMethod === "telegram"` - сообщение отправляется в Telegram
- Если `sendMethod === "email"` - сообщение отправляется на email

---

## Локализация

### Язык по умолчанию

По умолчанию установлен **русский язык**. Это настраивается в `lib/language-context.tsx`:

```tsx
const [language, setLanguageState] = useState<Language>("ru")
```

### Добавление переводов

Все переводы находятся в `lib/translations.ts`:

```typescript
export const translations = {
  en: {
    header: {
      title: "Ilya Oblog",
      // ...
    },
    // ...
  },
  ru: {
    header: {
      title: "Илья Облог",
      // ...
    },
    // ...
  },
}
```

### Использование в компонентах

```tsx
import { useLanguage } from "@/lib/language-context"

export function MyComponent() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t.header.title}</h1>
      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("ru")}>RU</button>
    </div>
  )
}
```

---

## Стилизация

### CSS Modules

Каждый компонент имеет свой CSS модуль. Классы именуются по методологии BEM:

```css
/* Блок */
.contact-booking { }

/* Элемент */
.contact-booking__title { }
.contact-booking__form { }

/* Модификатор */
.contact-booking__button--active { }
.contact-booking__button--disabled { }
```

### CSS переменные

Глобальные переменные определены в `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #171717;
  --secondary: #f5f5f5;
  --accent: #171717;
  --muted: #f5f5f5;
  --muted-foreground: #737373;
  --border: #e5e5e5;
  --destructive: #ef4444;
}
```

### Использование в CSS модулях

```css
.my-component__title {
  color: var(--foreground);
  background: var(--background);
}
```

---

## Переменные окружения

### Обязательные для Telegram

| Переменная | Описание | Пример |
|------------|----------|--------|
| `TELEGRAM_BOT_TOKEN` | Токен Telegram бота | `7123456789:AAHdqTc...` |
| `TELEGRAM_CHAT_ID` | ID чата для получения сообщений | `-1001234567890` |

### Обязательные для Email

| Переменная | Описание | Пример |
|------------|----------|--------|
| `CONTACT_EMAIL` | Email для получения сообщений | `hello@example.com` |
| `RESEND_API_KEY` | API ключ Resend (опционально) | `re_xxxxxxxxx` |

### Настройка в Vercel

1. Откройте настройки проекта в Vercel
2. Перейдите в **Settings** > **Environment Variables**
3. Добавьте все необходимые переменные
4. Сделайте редеплой проекта

### Настройка локально

Создайте файл `.env.local` в корне проекта:

```env
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
CONTACT_EMAIL=your@email.com
RESEND_API_KEY=your_resend_key
```

---

## Социальные сети

В компонентах `Footer` и `ContactBooking` настроены ссылки на социальные сети:

- **Telegram** - `https://t.me/username`
- **WhatsApp** - `https://wa.me/12125551234`
- **VK** - `https://vk.com/username`
- **Max** - ссылка на мессенджер Max

Для изменения ссылок отредактируйте массив `socialLinks` в соответствующих компонентах.

---

## Запуск проекта

### Разработка

```bash
pnpm install
pnpm dev
```

### Сборка

```bash
pnpm build
pnpm start
```

### Деплой на Vercel

1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения
3. Деплой произойдет автоматически

---

## Часто задаваемые вопросы

### Форма не отправляется в Telegram

1. Проверьте правильность `TELEGRAM_BOT_TOKEN`
2. Убедитесь, что бот добавлен в чат/группу
3. Проверьте `TELEGRAM_CHAT_ID` (для групп начинается с `-100`)

### Форма не отправляется на email

1. Проверьте `CONTACT_EMAIL`
2. Если используете Resend, убедитесь что домен подтвержден
3. Проверьте логи в Vercel для деталей ошибки

### Как изменить язык по умолчанию?

В файле `lib/language-context.tsx` измените начальное значение:

```tsx
const [language, setLanguageState] = useState<Language>("en") // или "ru"
```
