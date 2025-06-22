# Plantilla de React Native (Expo) con Nativewind, Lucide Icons y Reusables

Este repositorio sirve como una plantilla de inicio rápido para proyectos de React Native utilizando Expo. Está preconfigurado con una selección de herramientas y librerías modernas para acelerar el desarrollo de aplicaciones móviles, incluyendo Nativewind para estilos, Lucide para iconos y React Native Reusables para componentes comunes.

## ✨ Características

- **React Native con Expo:** Disfruta de un flujo de trabajo de desarrollo mejorado con Expo, que te permite construir y desplegar aplicaciones de React Native más rápidamente.
- **Nativewind:** Utiliza clases de utilidad de Tailwind CSS directamente en tus componentes de React Native para un estilizado rápido y consistente.
- **Lucide React Native:** Accede a un conjunto de iconos SVG hermosos y personalizables.
- **React Native Reusables:** Componentes comunes y reutilizables para acelerar el desarrollo.
- **Estructura de Proyecto Escalable:** Organizado para mantener tu código limpio y mantenible a medida que tu proyecto crece.

## 🚀 Empezando

Sigue estos pasos para empezar a usar la plantilla.

### Prerrequisitos

Asegúrate de tener instalado Node.js y el CLI de Expo en tu máquina.

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```bash
  npm install -g expo-cli
  ```

### Instalación

1.  **Usa esta plantilla:** Haz clic en el botón "Use this template" en la parte superior de esta página de GitHub para crear un nuevo repositorio basado en esta plantilla.

2.  **Clona tu nuevo repositorio:**

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

Para iniciar el servidor de desarrollo de Expo, ejecuta:

```bash
npm start
```

o

```bash
yarn start
```

Esto abrirá el Metro Bundler en tu navegador. Desde aquí, puedes:

- **Escanear el código QR** con la aplicación Expo Go (disponible para [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) y [iOS](https://apps.apple.com/us/app/expo-go/id982107779)) en tu dispositivo móvil.
- **Presionar `a`** para abrir en un emulador de Android.
- **Presionar `i`** para abrir en un simulador de iOS.

## 🔑 Conceptos Clave y Tecnologías

### Nativewind

Nativewind te permite usar las clases de utilidad de Tailwind CSS en React Native. Esto significa que puedes estilizar tus componentes de una manera muy similar a como lo harías en la web.

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

Para más información sobre cómo personalizar la configuración de Tailwind, consulta el archivo `tailwind.config.js`.

### Lucide React Native

Lucide es una librería de iconos simple y hermosa. Para usar un icono:

1.  Importa el icono que necesitas desde `lucide-react-native`.
2.  Úsalo como un componente de React.

**Ejemplo:**

```jsx
import { Sun } from "lucide-react-native";
import { iconWithClassName } from "./iconWithClassName";
iconWithClassName(Sun);
export { Sun };
```

### React Native Reusables

Esta librería proporciona un conjunto de componentes comunes que puedes usar en tus aplicaciones. La idea es tener una base de componentes bien construidos y probados para no tener que reinventar la rueda.

Consulta la documentación de `react-native-reusables` para ver la lista completa de componentes disponibles y cómo usarlos.

## 📂 Estructura del Proyecto

La estructura de carpetas está diseñada para ser escalable y mantenible:

```
.
├── assets/               # Fuentes, imágenes y otros recursos estáticos
├── src/
│   ├── components/       # Componentes de UI reutilizables
│   ├── navigation/       # Lógica de navegación y stacks
│   ├── screens/          # Pantallas de la aplicación
│   ├── utils/            # Funciones de utilidad
│   └── constants/        # Constantes globales
├── App.tsx               # Punto de entrada principal de la aplicación
├── tailwind.config.js    # Configuración de Nativewind
└── package.json          # Dependencias y scripts del proyecto
```

## 📜 Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Inicia la aplicación en un emulador de Android.
- `npm run ios`: Inicia la aplicación en un simulador de iOS.
- `npm run web`: Inicia la aplicación en un navegador web.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar esta plantilla, por favor abre un issue para discutirlo o envía un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
