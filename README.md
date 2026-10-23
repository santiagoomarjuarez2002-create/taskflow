# TaskFlow

## Integrantes

- Santiago Juarez
- Santiago Acosta

## Descripción del proyecto

TaskFlow permite agregar tareas con nombre, descripción y fecha límite, marcarlas como completadas o pendientes y eliminarlas. Las tareas no se guardan de forma permanente: al recargar la página se pierden. No se utiliza una base de datos ni localStorage.

## Tecnologías utilizadas

- HTML para la estructura y JavaScript para la interacción.
- Bootstrap 5.3.8 para componentes, distribución y utilidades de estilos.
- CSS para personalizar colores, fondos y controles.
- Git y GitHub para el control de versiones.
- Visual Studio Code como editor.

## Estructura del proyecto

```text
taskflow/
├── img/
│   └── .gitkeep
├── index.html
├── style.css
├── script.js
└── README.md
```

La carpeta img está preparada para incorporar imágenes. .gitkeep permite conservarla en Git aunque no tenga imágenes.

## Funcionamiento del JavaScript

script.js se carga con defer: se ejecuta después de procesar el HTML.

### Selección de elementos

document.getElementById() obtiene referencias al formulario, sus campos, la lista de tareas, el espacio de mensajes y los controles del calendario. Estas referencias permiten leer los datos y modificar la página.

### Formato de fechas

formatearFecha(fecha) separa la fecha con split() usando el guion como separador y transforma AAAA-MM-DD en DD/MM/AAAA. Si no se eligió una fecha, devuelve Sin fecha límite.

### Calendario del menú

Al hacer clic en Calendario, preventDefault() evita la navegación del enlace. getBoundingClientRect() obtiene su posición para ubicar el campo de fecha invisible debajo del enlace.

El código usa showPicker() si el navegador dispone de ese método. En caso contrario, intenta abrirlo con focus() y click(); el resultado depende del navegador.

Este calendario es independiente de la fecha del formulario: no filtra tareas ni modifica sus fechas.

### Creación de tareas

El evento submit del formulario realiza estos pasos:

1. Evita recargar la página mediante preventDefault().
2. Lee nombre, descripción y fecha. trim() quita espacios al principio y al final del nombre y la descripción.
3. Si el nombre queda vacío, muestra un mensaje, devuelve el foco al campo y detiene la creación. El HTML también incluye required.
4. Crea un article con document.createElement() y le agrega clases de Bootstrap.
5. Guarda el estado inicial en dataset.estado, con el valor pendiente, y la fecha en dataset.fechaLimite.
6. Crea la etiqueta de estado, el título, la descripción, la fecha y los botones de completar y eliminar.
7. Inserta la tarjeta en la lista, limpia el formulario con reset() y devuelve el foco al nombre.
8. Muestra un mensaje de confirmación.

Descripción y fecha son opcionales: si faltan, se muestran Sin descripción. y Sin fecha límite.

Los textos se insertan con textContent, por lo que lo escrito por el usuario se muestra como texto y no se interpreta como HTML.

### Cambio de estado y eliminación

Un único evento click en listaTareas atiende los botones de todas las tarjetas, incluidas las nuevas. Esta técnica se llama delegación de eventos.

- **Cambiar estado:** closest() con la clase tarjeta encuentra la tarjeta del botón. Se actualiza dataset.estado, se intercambian las clases amarillas y verdes con classList.replace() y se cambian la etiqueta y el texto del botón. Una tarea completada puede volver a pendiente.
- **Eliminar:** se obtiene el nombre de la tarea y se elimina la tarjeta con remove().
- **Lista vacía:** si no quedan tarjetas después de un clic en la lista, se muestra No hay tareas. ¡Agregá una nueva!.

Los mensajes se escriben en un elemento con aria-live con el valor polite, para que las tecnologías de asistencia puedan anunciar los cambios.

## Diseño y Bootstrap

La página usa el tema oscuro con data-bs-theme con el valor dark. style.css personaliza variables de Bootstrap como --bs-primary-rgb, --bs-body-bg, --bs-body-color, --bs-secondary-color y --bs-border-color. También define colores para los botones, fondos con degradados y estilos de foco para los campos.

### Flexbox y distribución

- La navegación utiliza navbar y utilidades como order y ms-auto.
- Las tareas se apilan verticalmente con vstack y gap-3.
- Los botones de cada tarjeta usan d-flex, flex-wrap y gap-2.
- El formulario utiliza las columnas de Bootstrap: row, col-12 y col-md-6.

La versión actual no define una cuadrícula propia de CSS Grid para las tareas.

### Responsive Design

- meta viewport adapta la página al ancho del dispositivo.
- navbar-expand-md permite contraer el menú en pantallas pequeñas. Su apertura depende del JavaScript de Bootstrap.
- col-12 col-md-6 coloca descripción y fecha en una columna en pantallas pequeñas y en dos a partir del tamaño md de Bootstrap.
- d-grid d-md-block adapta la distribución del botón del formulario.
- Bootstrap gestiona los contenedores y espaciados. El CSS propio actual no incluye media queries.

## HTML semántico

Se utilizan header, nav, main, section y footer. Cada tarea es un article creado desde JavaScript. Los campos tienen etiquetas label asociadas.

## Organización con Git y GitHub

El flujo de trabajo propuesto utiliza main para la versión final, dev para integrar el desarrollo y ramas feature para cambios específicos. Se utilizan commits descriptivos, push, Pull Requests y merge para compartir y revisar cambios.

## Cómo ejecutar y comprobar el proyecto

1. Descargar o clonar el repositorio y abrirlo en Visual Studio Code.
2. Abrir index.html en un navegador o utilizar Live Server. No requiere instalación de paquetes ni compilación.
3. Crear una tarea con nombre, descripción y fecha, y comprobar el formato de la fecha.
4. Crear otra sin descripción ni fecha para comprobar los textos predeterminados.
5. Marcar una tarea como completada y volver a marcarla como pendiente.
6. Eliminar todas las tareas y comprobar el mensaje de lista vacía.
7. Abrir el calendario y probar el menú en una pantalla pequeña.
8. Recargar la página para comprobar que las tareas no se conservan.

Bootstrap se descarga desde un CDN: se necesita conexión a Internet para cargar sus estilos y su JavaScript.
