# pro.mama — birth preparation course

This single page site is built with **Vue&nbsp;3**, **Vite** and **Tailwind&nbsp;CSS**. It provides details about the course, reviews and a sign‑up form for expecting mothers.

Requires **Node.js 18** or newer.

## Getting started

```bash
npm install
npm run dev:all # start frontend and API together
```

The server stores submissions in `server/signups.db` (SQLite) and can send a Telegram notification for each new registration.

## Keep the site running

To run the site continuously in the background use **pm2**:

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the server under pm2:

   ```bash
   npm run start:pm2
   ```

The site will be available on port **3000** and pm2 will restart it automatically if it crashes. Stop it with:

```bash
npx pm2 stop for-mam
```

To serve the built site and API together:

```bash
npm start
```

---

## По-русски

Одностраничный сайт, созданный на Vue 3, Vite и Tailwind CSS. Содержит информацию о программе, отзывы и форму записи на курс.

Требуется **Node.js 18** или новее.

### Запуск проекта

```bash
npm install
npm run dev:all # запустить фронтенд и сервер вместе
```

Сервер сохраняет заявки в `server/signups.db` (SQLite) и может отправлять уведомления в Telegram.

### Постоянная работа сайта

Чтобы сайт продолжал работать после закрытия терминала, воспользуйтесь **pm2**:

1. Соберите проект:

   ```bash
   npm run build
   ```

2. Запустите сервер в pm2:

   ```bash
   npm run start:pm2
   ```

Сайт будет доступен на порту **3000**, pm2 перезапустит его при сбоях. Остановить можно командой:

```bash
npx pm2 stop for-mam
```

Для запуска собранного сайта и API вместе:

```bash
npm start
```
