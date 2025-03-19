# Prueba Técnica - Frontend

## 📌 Descripción
Este proyecto es una prueba técnica desarrollada con **Vite + React**. Proporciona una interfaz rápida y moderna para consumir APIs y manejar el estado de la aplicación.

## 🚀 Instalación y ejecución
### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/Dark-rambler/prueba-frontend.git
cd prueba-frontend
```

### 2️⃣ Instalar dependencias
```sh
npm install
```
### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y agrega:
```
VITE_CHUCK_NORRIS_API_URL=https://api.chucknorris.io/jokes/
```

### 4️⃣ Iniciar la aplicación
```sh
npm run dev
```
El proyecto se ejecutará en `http://localhost:5173/`.

---

## 📌 Scripts disponibles
- `npm run dev` → Inicia el servidor de desarrollo en `http://localhost:5173/`
- `npm run build` → Genera una versión optimizada para producción
- `npm run preview` → Previsualiza la versión de producción

---

## 🛠️ Tecnologías usadas
- **Vite** → Entorno de desarrollo rápido
- **React** → Biblioteca para construir la UI
- **React Router** (si aplica) → Manejo de rutas
- **CSS Modules / Tailwind / Styled Components** (dependiendo del proyecto)

---

## 📄 Estructura del proyecto
```
prueba-frontend/
│── src/
│   ├── components/  # Componentes reutilizables
│   ├── utils/     # Llamadas a APIs
│   ├── hooks/        # Custom hooks
│   ├── App.jsx       # Punto de entrada
│── public/
│── index.html
│── package.json
│── vite.config.js
```
