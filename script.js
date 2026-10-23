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

    const posicionBoton = botonCalendario.getBoundingClientRect();

    calendarioPrincipal.style.left = `${posicionBoton.left}px`;
    calendarioPrincipal.style.top = `${posicionBoton.bottom}px`;

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

    const tarjeta = document.createElement("article");
    tarjeta.classList.add(
        "tarjeta",
        "card",
        "p-4",
        "shadow-sm",
        "rounded-4",
        "text-break",
        "border-warning"
    );
    tarjeta.dataset.estado = "pendiente";
    tarjeta.dataset.fechaLimite = fecha;

    const etiqueta = document.createElement("span");
    etiqueta.classList.add(
        "etiqueta",
        "badge",
        "text-bg-warning",
        "align-self-start"
    );
    etiqueta.textContent = "Pendiente";

    const titulo = document.createElement("h3");
    titulo.classList.add("h5", "mt-3", "mb-2");
    titulo.textContent = nombre;

    const texto = document.createElement("p");
    texto.textContent = descripcion || "Sin descripción.";

    const fechaTarea = document.createElement("p");
    fechaTarea.classList.add("small", "text-body-secondary");
    fechaTarea.textContent = `Fecha límite: ${formatearFecha(fecha)}`;

    const botonEstado = document.createElement("button");
    botonEstado.type = "button";
    botonEstado.classList.add("boton-estado", "btn", "btn-success", "rounded-3", "px-3", "py-2");
    botonEstado.textContent = "Marcar como completada";

    const botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.classList.add(
        "boton-eliminar",
        "btn",
        "btn-outline-danger",
        "rounded-3",
        "px-3",
        "py-2"
    );
    botonEliminar.textContent = "Eliminar";

    const acciones = document.createElement("div");
    acciones.classList.add(
        "d-flex",
        "flex-wrap",
        "gap-2",
        "mt-auto"
    );
    acciones.append(botonEstado, botonEliminar);

    tarjeta.append(
        etiqueta,
        titulo,
        texto,
        fechaTarea,
        acciones
    );

    listaTareas.appendChild(tarjeta);

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

            tarjeta.classList.replace(
                "border-warning",
                "border-success"
            );

            etiqueta.classList.replace(
                "text-bg-warning",
                "text-bg-success"
            );

            etiqueta.textContent = "Completada";
            boton.textContent = "Marcar como pendiente";

            mensajeTareas.textContent = "Tarea marcada como completada.";
        } else {
            tarjeta.dataset.estado = "pendiente";

            tarjeta.classList.replace(
                "border-success",
                "border-warning"
            );

            etiqueta.classList.replace(
                "text-bg-success",
                "text-bg-warning"
            );

            etiqueta.textContent = "Pendiente";
            boton.textContent = "Marcar como completada";

            mensajeTareas.textContent = "Tarea marcada como pendiente.";
        }
    }

    if (boton.classList.contains("boton-eliminar")) {
        const tarjeta = boton.closest(".tarjeta");
        const titulo = tarjeta.querySelector("h3").textContent;

        tarjeta.remove();
        mensajeTareas.textContent = `Se eliminó la tarea: ${titulo}.`;
    }

    if (listaTareas.querySelectorAll(".tarjeta").length === 0) {
        mensajeTareas.textContent = "No hay tareas. ¡Agregá una nueva!";
    }
});