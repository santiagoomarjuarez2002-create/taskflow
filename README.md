# TaskFlow

## Descripción del proyecto

TaskFlow es una página web diseñada para organizar y visualizar tareas de manera sencilla.

El proyecto permite visualizar tareas pendientes y completadas, acceder a diferentes secciones mediante un menú de navegación y seleccionar fechas desde un calendario básico.

La página fue desarrollada utilizando HTML5 y CSS3, aplicando técnicas de diseño responsive para adaptarse a computadoras, tablets y celulares.

## Integrantes

- Santiago Juarez
- Santiago Acosta 

## Tecnologías utilizadas

- HTML5: utilizado para crear la estructura y el contenido de la página.
- CSS3: utilizado para aplicar estilos, colores, tipografías y diseños.
- Flexbox: utilizado para organizar y alinear elementos.
- CSS Grid: utilizado para distribuir las tarjetas de tareas.
- Media Queries: utilizadas para adaptar el diseño a diferentes pantallas.
- Git: utilizado para el control de versiones del proyecto.
- GitHub: utilizado para almacenar el repositorio y trabajar de manera colaborativa.
- Visual Studio Code: editor utilizado para desarrollar el proyecto.

## Funcionalidades implementadas

- Página de inicio con presentación de TaskFlow.
- Menú de navegación con enlaces a las secciones.
- Visualización de tareas pendientes y completadas.
- Tarjetas con títulos, descripciones y estados.
- Calendario básico para seleccionar fechas.
- Sección de contacto informativa.
- Diseño adaptable a diferentes tamaños de pantalla.

## Estructura del proyecto

```text
taskflow/
├── index.html
├── style.css
└── README.md
```

La carpeta `img/` se incorporará si se utilizan imágenes en el proyecto.

## ¿Dónde utilizamos Flexbox?

Utilizamos Flexbox en el encabezado de la página, mediante la clase `.encabezado`, para organizar el título TaskFlow y el menú de navegación.

También lo utilizamos en `.navegacion` y `.presentacion` para distribuir y alinear los elementos.

Propiedades utilizadas:

- `display: flex`
- `justify-content`
- `align-items`
- `flex-direction`
- `gap`
- `flex-wrap`

## ¿Dónde utilizamos CSS Grid?

Utilizamos CSS Grid en la sección "Mis tareas", mediante la clase `.lista-tareas`.

Grid permite organizar las tarjetas en columnas y mantener una separación uniforme entre ellas.

En computadoras se muestran tres columnas, en tablets dos columnas y en celulares una columna.

Propiedades utilizadas:

- `display: grid`
- `grid-template-columns`
- `repeat()`
- `minmax()`
- `gap`

## ¿Qué variables CSS creamos?

Definimos variables CSS dentro de `:root` para mantener organizados los colores y espaciados del proyecto.

Variables utilizadas:

- `--color-principal`
- `--color-secundario`
- `--color-fondo`
- `--color-tarjeta`
- `--color-texto`
- `--color-texto-suave`
- `--color-borde`
- `--color-pendiente`
- `--color-completada`
- `--espaciado`

Estas variables se reutilizan mediante la función `var()`.

## ¿Cómo implementamos el Responsive Design?

Implementamos Responsive Design utilizando Media Queries para adaptar la página a distintos tamaños de pantalla.

- **Computadoras:** las tareas se organizan en tres columnas.
- **Tablets (hasta 900px):** las tareas se organizan en dos columnas.
- **Celulares (hasta 600px):** las tareas se muestran en una sola columna y el encabezado cambia su distribución.

También utilizamos unidades relativas como `%`, `rem`, `vh`, `vw` y `fr` para conseguir un diseño flexible.

## Box Model

Aplicamos propiedades del modelo de caja para controlar los espacios y tamaños de los elementos.

Utilizamos `margin`, `padding`, `border` y `box-sizing`.

También incorporamos bordes redondeados y sombras en las tarjetas para mejorar la presentación visual.

## HTML semántico

Organizamos el contenido utilizando etiquetas semánticas como:

- `header`: encabezado de la página.
- `nav`: menú de navegación.
- `main`: contenido principal.
- `section`: división del contenido en secciones.
- `article`: representación de cada tarea.
- `footer`: pie de página.

## Gestión del proyecto con Git y GitHub

El proyecto se desarrolla de manera colaborativa utilizando Git y GitHub.

Se utilizan las siguientes ramas:

- `main`: rama principal del proyecto.
- `dev`: rama de integración del desarrollo.
- `feature/estructura-html`: desarrollo de la estructura HTML.
- `feature/diseno-responsive`: desarrollo de los estilos y el diseño responsive.

Los cambios se registran mediante commits descriptivos y se integran mediante Pull Requests y merges, según el flujo de trabajo del equipo.

## ¿Cómo ejecutar el proyecto?

1. Descargar o clonar el repositorio desde GitHub.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir el archivo `index.html` en un navegador o mediante Live Server.
4. Navegar por las diferentes secciones de TaskFlow.

## Estado actual

El proyecto cuenta con una estructura HTML semántica, estilos CSS externos, tarjetas de tareas, un selector de fechas y reglas de diseño responsive.

Las tareas mostradas son ejemplos estáticos. Actualmente no se pueden agregar, editar ni eliminar tareas dinámicamente.

El proyecto podrá ampliarse posteriormente utilizando JavaScript o React para incorporar nuevas funcionalidades.