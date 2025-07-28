import { cargarModal } from "./validaciones.js";

// 2. Seleccionar el span donde se mostrará el nombre
const spanNombre = document.getElementById("nombre_usuario");

// 3. Verificar si hay usuario y reemplazar el contenido
if (usuario && usuario.nombre_usuario) {
  spanNombre.textContent = usuario.nombre_usuario;
} else {
  spanNombre.textContent = "Invitado";
}
 const contenedor = document.getElementById(".content_usuario");

 // 1. Obtener el usuario del sessionStorage
const usuario = JSON.parse(sessionStorage.getItem("usuario"));

// 2. Seleccionar el contenedor donde irá la tabla


// 3. Crear la tabla
const tabla = document.createElement("table");
tabla.classList.add("info_usuario"); // Puedes definir esta clase en CSS

// 4. Crear la cabecera
const thead = document.createElement("thead");
const filaCabecera = document.createElement("tr");

const columnas = ["Nombre","Estado", "Documento", "Correo"];
columnas.forEach(columna => {
  const th = document.createElement("th");
  th.textContent = columna ;
  filaCabecera.appendChild(th);
});

thead.appendChild(filaCabecera);
tabla.appendChild(thead);

// 5. Crear el cuerpo de la tabla con los datos del usuario
const tbody = document.createElement("tbody");
const filaDatos = document.createElement("tr");

const datos = [
  usuario.nombre_usuario,
  usuario.estado || usuario.estado_usuario || "Activo",
  usuario.documento_usuario,
  usuario.correo || "No registrado"
];

datos.forEach(dato => {
  const td = document.createElement("td");
  td.textContent = dato;
  filaDatos.appendChild(td);
});

tbody.appendChild(filaDatos);
tabla.appendChild(tbody);

// 6. Agregar la tabla al contenedor
contenedor.innerHTML = ""; // Limpiamos por si acaso
contenedor.appendChild(tabla);



function actualizarNotificaciones(cantidad) {
  const badge = document.getElementById('notifBadge');
  
  if (cantidad > 0) {
    badge.textContent = cantidad;
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
}

// Simula que hay 3 notificaciones del sistema
actualizarNotificaciones(2);

document.querySelector('.sidebar__item a').addEventListener('click', async (e) => {
  e.preventDefault();

  let modal = document.getElementById('modalNotificaciones');

  if (!modal) {
    modal = await cargarModal('/MODAL/modalNotificaciones.html', '.content__user', 'modalNotificaciones');
  }

  if (modal) {
    modal.classList.toggle('oculto');
  }
});


