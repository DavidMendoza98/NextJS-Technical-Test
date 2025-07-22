# NextJS-Technical-Test
Technical test on react and nextjs showing cities in Honduras with low apis consumption and login
# 🌐 Conociendo Honduras

Este es un proyecto web construido con **Next.js (App Router)** que muestra distintas ciudades, lugares turísticos y actividades en Honduras. Utiliza **TypeScript**, **React**, y **Tailwind CSS** para la interfaz de usuario.

## 📁 Estructura del proyecto

El proyecto usa la nueva arquitectura de rutas (`app directory`) de Next.js:

# Rutas de la Aplicación

- `/` - Página principal
- `/account` - Cuenta del usuario
- `/activity` - Actividades de usuario
- `/auth` - Autenticación (login, registro)
- `/cities` - Ciudades
- `/places/[id]` - Lugar específico (ruta dinámica)


## 🚀 Tecnologías

- next 15
- react 19
- react-hook-form
- sonner
- Tailwind CSS
- lucide-react
- TypeScript

## 🔍 Características

- 🔐 Rutas protegidas con autenticación (`auth/`)
- 🌆 Exploración de ciudades y lugares
- 📌 Vista detallada dinámica de lugares con `places/[id]`
- 💼 Gestión de cuenta de usuario
- 🧩 Componentes reutilizables en carpetas `_components/`

## 🛠️ Scripts útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
