# React Native Boilerplate con Expo

Template de inicio rápido para proyectos de React Native utilizando Expo. Está preconfigurado con una selección de herramientas y librerías modernas para acelerar el desarrollo de aplicaciones móviles.

## ✨ Características Incluidas

- **TypeScript**: Tipado estático para un desarrollo más confiable y mantenible.
- **Expo:** Framework que simplifica el desarrollo y despliegue de aplicaciones React Native.
- **Theming y Estilos**: Configuración de Tailwind CSS (a través de [nativewind](https://www.nativewind.dev/)) y sistema de Modo Claro/Oscuro integrado.
- **Lucide Icons:** Set de iconos SVG limpios y personalizables, integrados con Nativewind.
- **Expo Router:** Navegación y enrutamiento basados en el sistema de archivos para una estructura de aplicación sólida e intuitiva.
- **Arquitectura de Componentes de UI Avanzada**: Patrón de composición para componentes flexibles y modulares usando `class-variance-authority`, `clsx`, `tailwind-merge` y `@rn-primitives/slot`.
- **Estructura Escalable:** Organización de archivos pensada para el crecimiento y la mantenibilidad del proyecto.
- **Alias de Ruta:** Configuración de alias (`@/` y `~/`) para importaciones más limpias.
- **Lint y Formateo**: Eslint y Prettier para mantener un código consistente.
- **Manejo de Estado**: Abierto a integración con Redux Toolkit, Zustand, etc.

## 🚀 Guía de Inicio Rápido

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión LTS recomendada) y [Expo CLI](https://docs.expo.dev/workflow/expo-cli/).

### Instalación

Este es un repositorio de template. Para usarlo correctamente, sigue estos pasos:

1.  **Crea tu propio repositorio desde este template:** Haz clic en el botón **"Use this template"** en la parte superior de la página de GitHub.
2.  **Clona tu nuevo repositorio:** Reemplaza `TU_USUARIO/TU_REPOSITORIO` con los datos de tu repositorio.
    ```bash
    git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
    ```
3.  **Accede al directorio e instala las dependencias:**
    ```bash
    cd TU_REPOSITORIO
    npm install
    # o
    yarn install
    ```

### Ejecutando el Proyecto

Para iniciar el proyecto en modo de desarrollo con Expo:

```bash
npm run start
# o
yarn start
```

Esto abrirá la herramienta de desarrollo de Expo, desde donde podrás:
- **Ejecutar** la app en un emulador/simulador iOS o Android.
- **Escanear** el código QR con la app Expo Go en tu dispositivo físico.
- **Depurar** errores y ver el registro de la consola.

## 🛠️ Tecnologías y Convenciones

### Arquitectura de Componentes de UI

Este template utiliza un patrón de composición avanzado para crear y manejar componentes con mayor flexibilidad y modularidad:

- **class-variance-authority**: Facilita la creación de variantes de tus componentes de forma escalable y organizada.
- **Función `cn`**: Combina [clsx](https://github.com/lukeed/clsx) y [tailwind-merge](https://github.com/dcastil/tailwind-merge) para fusionar clases de Tailwind CSS de manera segura, evitando conflictos de estilo.
- **@rn-primitives/slot**: Permite pasar las props a un único elemento hijo a través de la prop `asChild`, aumentando la flexibilidad y composición de los componentes.

### Sistema de Theming (Modo Claro/Oscuro)

- **Hook de estado de tema**: Se utiliza `useColorScheme` de [nativewind](https://www.nativewind.dev/) para detectar y mantener el estado del tema.
- **Variables de color**: Los colores se definen como variables CSS en `globals.css`, lo que facilita la gestión de estilos para ambos modos.
- **Integración con React Navigation**: El modo de tema también afecta la navegación configurada en `app/_layout.tsx`, apoyado por constantes definidas en [`NAV_THEME`](lib/constants.ts).

### Estilizado con Nativewind

Usamos [Nativewind](https://www.nativewind.dev/) para aplicar estilos mediante clases de utilidad de Tailwind CSS. Esto agiliza el desarrollo y mantiene la consistencia visual.

**Ejemplo:**
```jsx
import { View, Text } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-blue-500">
        ¡Hola, Nativewind!
      </Text>
    </View>
  );
}
```
Puedes personalizar la configuración de Tailwind en `tailwind.config.js`.

### Iconos con Lucide

La plantilla utiliza [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native) para los iconos. Para que los iconos soporten la prop `className` de Nativewind, se utiliza una utilidad `iconWithClassName` que se encuentra en `lib/icons/iconWithClassName.ts`.

> [!WARNING]
> Si no envuelves los iconos con `iconWithClassName`, no podrás actualizar las props de color u opacidad mediante la prop `className`.

**Ejemplo de configuración de un icono:**

1.  Crea un archivo para exportar el icono, por ejemplo `lib/icons.ts`.
2.  Importa el icono de `lucide-react-native` y pásalo por la utilidad.

```tsx
// lib/icons.ts
import { Sun, Moon } from "lucide-react-native";
import { iconWithClassName } from "@/lib/icons/iconWithClassName";

export const IconSun = iconWithClassName(Sun);
export const IconMoon = iconWithClassName(Moon);
```

3.  Ahora puedes importar `IconSun` o `IconMoon` en cualquier componente y aplicarles estilos:

```tsx
import { IconSun } from "@/lib/icons";

const MyComponent = () => <IconSun className="text-yellow-500" size={48} />;
```

### Navegación

La navegación está gestionada por [Expo Router](https://docs.expo.dev/router/introduction/), que utiliza un sistema de enrutamiento basado en archivos. La estructura de navegación se define dentro del directorio `app/`.

### Alias de Ruta

Para mantener las importaciones limpias y evitar rutas relativas complejas (ej. `../../components`), se han configurado alias de ruta.

-   **`@/`**: Es el alias por defecto y apunta al directorio raíz del proyecto.
-   **`~/`**: Este alias es utilizado específicamente por `react-native-reusables`.

**Ejemplo de uso:**
```tsx
// En lugar de: import { MyComponent } from './components/MyComponent';
import { MyComponent } from '@/components/MyComponent';

// Ejemplo para react-native-reusables
import { SomeReusableComponent } from '~/components/SomeReusableComponent';
```

## 📂 Estructura del Proyecto

La estructura de archivos está diseñada para ser escalable y mantenible:

```
.
├── app/                  # Rutas y pantallas de la aplicación (Expo Router).
│   ├── _layout.tsx       # Layout principal de la aplicación.
│   ├── globals.css       # Hoja de estilos globales.
│   └── index.tsx         # Pantalla de inicio.
├── assets/               # Imágenes, fuentes y otros recursos estáticos.
│   ├── fonts/            # Fuentes usadas dentro de la app.
│   ├── images/           # Imagenes usadas dentro de la app, como splash o favicon.
├── components/           # Componentes de UI reutilizables.
│   └── ui/               # Componentes de UI básicos (Button, Text, etc.).
├── lib/                  # Lógica de negocio, utilidades y constantes.
│   ├── constants.ts      # Constantes de la aplicación.
│   ├── icons/            # Configuración y exportación de iconos.
│   ├── useColorScheme.tsx # Configuración para temas y modo de color.
│   └── utils.ts          # Funciones de utilidad.
├── app.json              # Configuración de la aplicación Expo.
├── babel.config.js       # Configuración de Babel (incluye alias de ruta).
├── components.json       # Configuración de alias para componentes.
├── metro.config.js       # Configuración de Metro bundler.
├── tailwind.config.js    # Configuración de Nativewind y Tailwind CSS.
├── tsconfig.json         # Configuración de TypeScript.
├── package.json          # Dependencias y scripts del proyecto.
├── expo-env.d.ts         # Tipos globales para Expo.
└── nativewind-env.d.ts   # Tipos globales para Nativewind.
```

## 📜 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Inicia la aplicación en un emulador/dispositivo Android.
- `npm run ios`: Inicia la aplicación en un simulador/dispositivo iOS.
- `npm run web`: Inicia la aplicación en un navegador web.

## 🤝 Contribuciones

Se aceptan contribuciones a través de *pull requests*. Antes de enviar cambios, revisa las guías de estilo y asegúrate de que el código se ajuste a los linters y convenciones del proyecto.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
