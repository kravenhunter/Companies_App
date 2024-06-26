# Описание проекта

Тестовое задание: Приложение по тестирования

Функционал приложения:

-   Возможность отвечать на различного рода вопросы
-   Возможность начать или продолжить тестирование-
-   Получить список выполненных ответов
-   Добавление и редактирование вопросов
-   Добавлиние вопросов по типам: единый выбор, множественный выбор, короткий ответ, развернутый ответ
-   Список вопросов сохраняется в local-storage
-   Генерируется и перемешивается новый список вопросов для тестирования
-   Включается таймер , который сохраняется в local-storage
-   Результаты тестирования сохраняютсяв local-storage

Роутинг страниц:

-   "/" Главная страницы
-   "/quiz" Страница тестирования
-   "/result" Страница результатов тестирования
-   "/manage" Панель управления вопросами (добавления, редактирования)

Все поставленные цели выполненными.

## Использование

Для начала работы с приложением необходимо:

1. Клонировать репозиторий `git clone <ссылка-репозитория>`
2. Перейти в папку с клиентом `cd school_certification`
3. Установить все зависимости для клиента `npm install`
4. Запустить сервер и клиент с помощью команда `npm run dev`

## Развертывание

Для начала работы с приложением необходимо:

1. Сборка проекта `npm run build`
2. Предпросмотр приложения `npm run preview`

## Stack

-   React 18 + React-router
-   Typescript
-   Redux-toolkit
-   Tailwindcss
-   Scss
-   Classnames
-   Eslint + Prietter
