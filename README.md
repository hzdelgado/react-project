# Little Lemon Restaurant 🍋

Este es el proyecto final (Capstone) del curso **Meta Front-End Developer** en Coursera.  
Simula el sitio web del restaurante ficticio *Little Lemon*, donde los usuarios pueden explorar el sitio y realizar reservas de manera sencilla.

---

## 🧑‍💻 Tecnologías utilizadas

- ⚛️ React con TypeScript
- 🔀 React Router DOM
- 🎨 Material UI (MUI)
- 📦 Vite
- ✅ Yup para validaciones de formularios
- 🧱 CSS Flexbox y Grid (con soporte de MUI)
- ♿ Accesibilidad básica

---

## ✨ Funcionalidades

- Página de inicio con introducción al restaurante
- Formulario de reservas con validaciones
- Redirección automática a una página de confirmación
- Navegación entre páginas con React Router
- Diseño **responsive** adaptado para móviles y escritorio
- Componentes reutilizables (`Navbar`, `Footer`, `PageSection`, etc.)

---
## 📁 Estructura del Proyecto

La estructura del proyecto sigue una organización modular para facilitar su mantenimiento y escalabilidad. A continuación se muestra cómo está organizada la carpeta `src/`:

- **`assets/`**: Contiene imágenes, iconos y otros recursos estáticos utilizados en la interfaz de usuario.
- **`components/`**: Incluye componentes reutilizables como la barra de navegación (Navbar), pie de página (Footer), y otros bloques de contenido.
- **`pages/`**: Contiene los componentes para las páginas principales, como `Home`, `Booking`, `ConfirmedBooking` y una página de `NotFound` para rutas no válidas.
- **`App.tsx`**: Componente raíz que configura las rutas y la estructura principal de la interfaz.
- **`main.tsx`**: El archivo de entrada que renderiza el componente `App`.
- **`theme.ts`**: Archivo de tema global para Material UI.


## 🚀 Cómo ejecutar el proyecto

1. Clona este repositorio:
   ```bash
   git clone git@github.com:hzdelgado/react-project.git
   cd little-lemon
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre en tu navegador:
   ```bash
   http://localhost:5173
   ```
## 📜 Licencia

Este proyecto fue desarrollado exclusivamente con fines educativos como parte del programa [Meta Front-End Developer](https://www.coursera.org/professional-certificates/meta-front-end-developer) en Coursera.

El contenido y el código fuente están disponibles **únicamente para uso académico o personal**.  
No está permitido su uso con fines comerciales sin autorización.
