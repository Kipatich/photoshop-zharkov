# Публикация проекта

## Вариант 1. GitHub Pages

Это самый простой способ получить постоянную ссылку.

1. Создайте на GitHub публичный репозиторий, например `photoshop-zharkov`.
2. В папке проекта выполните:

   ```bash
   git init
   git add .
   git commit -m "Graphica: лабораторные работы по компьютерной графике"
   git branch -M main
   git remote add origin https://github.com/<ваш-логин>/photoshop-zharkov.git
   git push -u origin main
   ```

3. Откройте репозиторий на GitHub: **Settings → Pages**.
4. В блоке **Build and deployment** выберите **Source: GitHub Actions**.
5. Дождитесь окончания workflow **Deploy to GitHub Pages** на вкладке **Actions**.

Сайт будет доступен по адресу:

```text
https://<ваш-логин>.github.io/photoshop-zharkov/
```

В проекте уже настроены относительные пути (`base: './'`), поэтому сайт работает и в корне домена, и в подпапке репозитория.

## Вариант 2. Хостинг ИТ-факультета

Бесплатный хостинг Московского Политеха: [fit.mospolytech.ru/systems/infrastructure](https://fit.mospolytech.ru/systems/infrastructure).

1. Зарегистрируйтесь на сайте и подтвердите e-mail.
2. После активации аккаунта в разделе **Хостинг** получите данные сервера: адрес, логин, пароль, порт SFTP/SSH.
3. Соберите проект:

   ```bash
   npm ci
   npm run build
   ```

4. Подключитесь к серверу через FileZilla, WinSCP или Cyberduck по SFTP.
5. Загрузите **содержимое** папки `dist/` (не саму папку) в каталог сайта. Точный путь указан в письме или панели хостинга; обычно это `public_html`, `www` или `httpdocs`.
6. Проверьте сайт по адресу, который выдаётся в панели. Если домен ещё не привязан, обратитесь в поддержку факультета: `ist@fit.mospolytech.ru`.

Важно: загружать нужно только статические файлы из `dist/`. Папки `node_modules/`, `src/` и файлы конфигурации на хостинг не нужны.

## Обновление сайта

После изменений:

```bash
npm run build
```

Затем:

- для GitHub Pages — сделайте commit и push в `main`, workflow пересоберёт сайт автоматически;
- для хостинга Политеха — повторно загрузите содержимое `dist/` по SFTP, заменив старые файлы.
