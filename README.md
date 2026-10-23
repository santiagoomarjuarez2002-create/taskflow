# TaskFlow

## Integrantes

- Santiago Juarez
- Santiago Acosta

## Descripción del proyecto

TaskFlow es una página web para organizar tareas de manera sencilla.
Permite agregar tareas con nombre, descripción y fecha límite,tambien podemos marcarlas como completadas o pendientes y eliminarlas.
Las tareas no se guardan de forma permanente: al recargar la página se pierden.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Git y GitHub
- Visual Studio Code

## Estructura del proyecto

taskflow/
├── img/
│   └── .gitkeep
├── index.html
├── style.css
├── script.js
└── README.md

La carpeta img está preparada para incorporar imágenes. El archivo .gitkeep permite conservar la carpeta en Git aunque no tenga imágenes.

## ¿Dónde utilizamos Flexbox?

Utilizamos Flexbox en el encabezado, mediante la clase .encabezado, para distribuir el título y el menú de navegación.

También lo utilizamos en .navegacion para organizar los enlaces.

Aplicamos propiedades como:

- display: flex.
- justify-content.
- align-items.
- flex-wrap.
- flex-direction.
- gap.

## ¿Dónde utilizamos CSS Grid?

Utilizamos Grid en .lista-tareas para distribuir las tarjetas.

La cantidad de columnas se adapta automáticamente al espacio disponible mediante:

grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));

También utilizamos gap para separar las tarjetas.

## ¿Qué variables CSS creamos?

Definimos estas variables dentro de :root:

- --color-principal.
- --color-secundario.
- --color-fondo.
- --color-texto.
- --color-blanco.
- --color-verde.
- --color-rojo.

Las reutilizamos mediante var() para aplicar colores en fondos, textos, botones y bordes.

## ¿Cómo implementamos el Responsive Design?

Utilizamos:

- La etiqueta meta viewport en el HTML.
- Flexbox con flex-wrap para permitir que los elementos pasen a otra línea.
- Grid para adaptar las columnas de tareas al espacio disponible.
- Una Media Query de hasta 600px para colocar el encabezado en columna y reducir los espaciados.
- Anchos porcentuales y max-width para adaptar los campos y limitar el ancho del contenido.
- clamp() con rem y vw para adaptar el tamaño del título principal de la presentación.

## Box Model y unidades

Aplicamos margin, padding, border y box-sizing: border-box.

Utilizamos diferentes unidades:

- px para bordes, espaciados y anchos máximos.
- % para anchos y espaciados.
- rem para tamaños de texto.
- vh para la altura mínima del body.
- vw para el tamaño adaptable del título.
- fr para distribuir el espacio de las columnas de Grid.

También incorporamos tipografía Arial, colores, bordes redondeados y sombras.

## HTML semántico

Utilizamos las etiquetas:

- header.
- nav.
- main.
- section.
- footer.

Cada tarea se representa mediante un article creado desde JavaScript.

## Funcionalidades

- Agregar tareas con nombre, descripción y fecha límite.
- Marcar tareas como completadas.
- Volver a marcar tareas como pendientes.
- Eliminar tareas.
- Abrir un selector de fechas desde el menú.
- Mostrar mensajes de confirmación.

El selector de fechas del menú no filtra las tareas.

## Organización con Git y GitHub

El proyecto utiliza el siguiente flujo de trabajo:

- main para la versión final.
- dev para integrar el desarrollo.
- Ramas feature para trabajar en cambios específicos.
- Commits con mensajes descriptivos.
- Push para subir los cambios.
- Pull Requests para solicitar la revisión de un compañero.
- Merge para integrar los cambios revisados.

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir index.html en el navegador o utilizar Live Server.
4. Agregar tareas para probar las funcionalidades.