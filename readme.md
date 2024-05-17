# Proyecto Cliente-Servidor con Laravel y React

Este proyecto utiliza una arquitectura cliente-servidor donde el backend está desarrollado en Laravel y el frontend en React. La comunicación entre ambos se realiza mediante una API REST.

## Configuración del Backend (Laravel)

### Requisitos Previos

- PHP >= 8.2
- Composer
- MySQL

### Pasos para Levantar el Backend

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/nahuelRo/hotelinking-technical-test.git
   ```

2. Coloca la carpeta `backend` y `frontend` en la carpeta correspondiente del servidor local (por ejemplo, en `www` para XAMPP o Laragon).

3. Iniciar los servicios de XAMPP o Laragon

4. Navega hasta la carpeta del backend:

   ```bash
   cd backend
   ```

5. Instala las dependencias de Composer:

   ```bash
   composer install
   ```

6. Copia el archivo `.env.example` y renómbralo a `.env`.

7. Genera una nueva clave de aplicación:

   ```bash
   php artisan key:generate
   ```

8. Ejecuta las migraciones para crear las tablas en la base de datos:

   ```bash
   php artisan migrate
   ```

9. Opcionalmente, puedes poblar la base de datos con datos de prueba ejecutando los seeders:

   ```bash
   php artisan db:seed
   ```

10. Inicia el servidor de desarrollo de Laravel:

   ```bash
   php artisan serve
   ```

El backend estará disponible en `http://localhost:8000`.

## Configuración del Frontend (React)

### Requisitos Previos

- Node.js y npm o yarn

### Pasos para Levantar el Frontend

1. Navega hasta la carpeta del frontend:

   ```bash
   cd frontend
   ```

2. Instala las dependencias de npm o yarn:

   ```bash
   npm install
   # o
   yarn
   ```

3. Inicia la aplicación de React:

   ```bash
   npm start
   # o
   yarn start
   ```

La aplicación frontend estará disponible en `http://localhost:5173`.
