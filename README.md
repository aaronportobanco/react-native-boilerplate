# Plantilla de React Native (Expo)

Una plantilla de inicio profesional para proyectos de React Native con Expo, preconfigurada con herramientas modernas para un desarrollo rápido y escalable.

## ✨ Características Principales

- **Expo:** Framework que simplifica el desarrollo y despliegue de aplicaciones React Native.
- **Nativewind:** Clases de utilidad de Tailwind CSS para un estilizado rápido y consistente.
- **Lucide Icons:** Set de iconos SVG limpios y personalizables, integrados con Nativewind.
- **Expo Router:** Navegación y enrutamiento basados en el sistema de archivos para una estructura de aplicación sólida e intuitiva.
- **Componentes Reutilizables:** Arquitectura basada en componentes para una UI cohesiva y mantenible.
- **Estructura Escalable:** Organización de archivos pensada para el crecimiento y la mantenibilidad del proyecto.
- **Alias de Ruta:** Configuración de alias (`@/`) para importaciones más limpias.

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para empezar a usar la plantilla.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (se recomienda la versión LTS). El CLI de Expo se utilizará a través de `npx`, por lo que no es necesaria una instalación global.

### Instalación

1.  **Usa esta plantilla:** Haz clic en el botón "Use this template" en GitHub para crear tu propio repositorio.

2.  **Clona tu repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
    o
    ```bash
    yarn install
    ```

### Ejecutando el Proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm start
```

Esto iniciará Metro Bundler. Desde la terminal, puedes:
- Presionar `a` para abrir en un emulador de Android.
- Presionar `i` para abrir en un simulador de iOS.
- Presionar `w` para abrir en la web.

También puedes escanear el código QR con la aplicación Expo Go en tu dispositivo móvil.

## 🛠️ Tecnologías y Convenciones

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

### Alias de Ruta

Para mantener las importaciones limpias y evitar rutas relativas complejas (ej. `../../components`), se ha configurado un alias de ruta. El alias `@/` apunta al directorio raíz del proyecto.

**Ejemplo de uso:**
```tsx
// En lugar de: import { MyComponent } from './components/MyComponent';
import { MyComponent } from '@/components/MyComponent';
```

### Navegación

La navegación está gestionada por [Expo Router](https://docs.expo.dev/router/introduction/), que utiliza un sistema de enrutamiento basado en archivos. La estructura de navegación se define dentro del directorio `app/`.

## 📂 Estructura del Proyecto

La estructura de archivos está diseñada para ser escalable y mantenible:

```
.
├── app/                  # Rutas y pantallas de la aplicación (Expo Router).
│   ├── _layout.tsx       # Layout principal de la aplicación.
│   └── index.tsx         # Pantalla de inicio.
├── assets/               # Imágenes, fuentes y otros recursos estáticos.
├── components/           # Componentes de UI reutilizables.
│   └── ui/               # Componentes de UI básicos (Button, Text, etc.).
├── lib/                  # Lógica de negocio, utilidades y constantes.
│   ├── constants.ts      # Constantes de la aplicación.
│   ├── icons/            # Configuración y exportación de iconos.
│   └── utils.ts          # Funciones de utilidad.
├── babel.config.js       # Configuración de Babel (incluye alias de ruta).
├── tailwind.config.js    # Configuración de Nativewind y Tailwind CSS.
└── package.json          # Dependencias y scripts del proyecto.
```

## 📜 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Inicia la aplicación en un emulador/dispositivo Android.
- `npm run ios`: Inicia la aplicación en un simulador/dispositivo iOS.
- `npm run web`: Inicia la aplicación en un navegador web.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar la plantilla, por favor abre un *issue* para discutirlo o envía un *pull request*.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
