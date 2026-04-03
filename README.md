# FluxDev Blog (Frontend)

## Descripción

Esta es la interfaz pública del Blog FluxDev, donde los usuarios pueden interactuar y leer los artículos publicados. Está diseñada para ofrecer una experiencia de lectura rápida y cómoda, obteniendo el contenido desde el panel de administración central.

## Características

- **Diseño Atractivo**: Interfaz limpia y diseñada especialmente para facilitar la lectura sin distracciones.
- **Carga Rápida**: El sitio se genera de manera estática, lo que garantiza una velocidad de carga casi instantánea.
- **Soporte Multilingüe**: Permite cambiar el idioma de la plataforma entre español e inglés de manera sencilla.
- **Modo Oscuro**: Opción integrada para alternar entre colores claros y oscuros según la preferencia del usuario.

## Secciones

1. **Inicio**: Presenta los artículos más recientes o destacados de forma visual.
2. **Artículo (Post)**: La vista detallada de cada publicación, incluyendo el texto, imágenes y formato.
3. **Ajustes**: Un menú superior que permite configurar rápidamente el idioma y el tema visual.

## Uso

- **Visualizar Contenido**: El proyecto ya se encuentra en funcionamiento. Puedes explorarlo aquí: [FluxDev Blog](https://fluxdev-nova.mgdc.site/).
- **Personalizar Pantalla**: Usa el ícono superior para ajustar el modo oscuro o cambiar el idioma.
- **Lectura Fluida**: Navega entre publicaciones con transiciones rápidas y sin recargas de página completas.

## Tecnologías Utilizadas

- HTML / CSS / JavaScript
- Astro
- React
- Tailwind CSS
- pnpm

## Instalación

1. **Clonar el Repositorio**: Descarga el código de este proyecto en tu máquina usando Git.

```bash
git clone https://github.com/Ivandv19/blog-personal-fluxdev-frontend.git
```

2. **Instalar Dependencias**: Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
pnpm install
```

3. **Variables de Entorno**: Crea un archivo `.env` en la raíz del proyecto. Agrega la variable `PAYLOAD_URL` indicando el enlace donde está funcionando tu panel de administración.

4. **Iniciar el Proyecto**: Ejecuta el servidor localmente con:

```bash
pnpm run dev
```

## Créditos

Este es el proyecto encargado de mostrar públicamente el contenido del portafolio.

- Desarrollado por Ivan Cruz.

## Despliegue

El sitio web está desplegado en Cloudflare Pages y se distribuye automáticamente cada vez que se agrega un nuevo artículo. Puedes visitarlo aquí: [fluxdev-nova.mgdc.site](https://fluxdev-nova.mgdc.site/).

## Licencia

Licencia de Uso Personal:

Este software es propiedad de **Ivan Cruz**. Se permite el uso de este software solo para fines personales y no comerciales. No se permite la distribución, modificación ni uso comercial de este software sin el consentimiento expreso de **Ivan Cruz**.

Cualquier uso no autorizado puede resultar en acciones legales.
