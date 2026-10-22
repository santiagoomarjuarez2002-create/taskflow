const formulario = document.getElementById("formulario-tarea");
const nombreTarea = document.getElementById("nombre-tarea");
const descripcionTarea = document.getElementById("descripcion-tarea");
const fechaLimite = document.getElementById("fecha-limite");
const listaTareas = document.getElementById("lista-tareas");
const mensajeTareas = document.getElementById("mensaje-tareas");

const botonCalendario = document.getElementById("abrir-calendario");
const calendarioPrincipal = document.getElementById("calendario-principal");

function formatearFecha(fecha) {
    if (!fecha) {
        return "Sin fecha límite";
    }

    const partes = fecha.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

botonCalendario.addEventListener("click", function (evento) {
    evento.preventDefault();

    if (typeof calendarioPrincipal.showPicker === "function") {
        calendarioPrincipal.showPicker();
    } else {
        calendarioPrincipal.focus();
        calendarioPrincipal.click();
    }
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = nombreTarea.value.trim();
    const descripcion = descripcionTarea.value.trim();
    const fecha = fechaLimite.value;

    if (nombre === "") {
        mensajeTareas.textContent = "Ingresá el nombre de la tarea.";
        nombreTarea.focus();
        return;
    }

    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-lg-4");

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta", "tarea-pendiente");
    tarjeta.dataset.estado = "pendiente";
    tarjeta.dataset.fechaLimite = fecha;

    const etiqueta = document.createElement("span");
    etiqueta.classList.add("etiqueta");
    etiqueta.textContent = "Pendiente";

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.textContent = descripcion || "Sin descripción.";

    const fechaTarea = document.createElement("p");
    fechaTarea.classList.add("fecha-tarea");
    fechaTarea.textContent = `Fecha límite: ${formatearFecha(fecha)}`;

    const botonEstado = document.createElement("button");
    botonEstado.type = "button";
    botonEstado.classList.add("boton-estado");
    botonEstado.textContent = "Marcar como completada";

    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.textContent = "Eliminar";

    tarjeta.append(
        etiqueta,
        titulo,
        texto,
        fechaTarea,
        botonEstado,
        botonEliminar
    );

    columna.appendChild(tarjeta);
    listaTareas.appendChild(columna);

    formulario.reset();
    nombreTarea.focus();

    mensajeTareas.textContent = "¡Tarea agregada correctamente!";
});

listaTareas.addEventListener("click", function (evento) {
    const boton = evento.target;

    if (boton.classList.contains("boton-estado")) {
        const tarjeta = boton.closest(".tarjeta");
        const etiqueta = tarjeta.querySelector(".etiqueta");

        if (tarjeta.dataset.estado === "pendiente") {
            tarjeta.dataset.estado = "completada";
            tarjeta.classList.remove("tarea-pendiente");
            tarjeta.classList.add("tarea-completada");

            etiqueta.textContent = "Completada";
            boton.textContent = "Marcar como pendiente";

            mensajeTareas.textContent = "Tarea marcada como completada.";
        } else {
            tarjeta.dataset.estado = "pendiente";
            tarjeta.classList.remove("tarea-completada");
            tarjeta.classList.add("tarea-pendiente");

            etiqueta.textContent = "Pendiente";
            boton.textContent = "Marcar como completada";

            mensajeTareas.textContent = "Tarea marcada como pendiente.";
        }
    }

    if (boton.classList.contains("boton-eliminar")) {
        const columna = boton.closest(".col-12");
        const titulo = columna.querySelector("h3").textContent;

        columna.remove();
        mensajeTareas.textContent = `Se eliminó la tarea: ${titulo}.`;
    }

    if (listaTareas.children.length === 0) {
        mensajeTareas.textContent = "No hay tareas. ¡Agregá una nueva!";
    }
});
