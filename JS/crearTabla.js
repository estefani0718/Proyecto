// Controlador: hace el fetch y pasa los datos a la tabla
export async function cargarTablaGeneral(endpoint, columnas,   callbackCrear,callbackEditar,callbackEliminar) {
  const res = await fetch(endpoint);
if (!res.ok) {
  console.error("Error en la respuesta del servidor:", res.status);
  return;
}

const data = await res.json();
  crearTablaDinamica(data, columnas,   callbackCrear,callbackEditar,callbackEliminar);
}

// Función que crea tabla genérica
function crearTablaDinamica(data, columnas, callbackCrear,callbackEditar,callbackEliminar) {
   
  const main = document.querySelector(".main");
  main.innerHTML = ""; // Limpia cualquier tabla anterior

  // Contenedor general
  const contenedor = document.createElement("div");
  contenedor.classList.add("caja-tabla");

  // Título y botón de "Crear nuevo"
  const header = document.createElement("div");
  header.classList.add("tabla-header");

  const btnCrear = document.createElement("button");
  btnCrear.textContent = "Crear nuevo";
  btnCrear.classList.add("Buton__entrar");
  btnCrear.addEventListener("click", callbackCrear); // Llama a la función para crear

  header.append( btnCrear);

  // Tabla
  const tabla = document.createElement("table");
  tabla.classList.add("mi-tabla");

  // Encabezado
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  columnas.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    th.classList.add("celda-header");
    trHead.appendChild(th);
  });

  const thAcciones = document.createElement("th");
  thAcciones.textContent = "Opciones";
  thAcciones.classList.add("celda-header");
  trHead.appendChild(thAcciones);

  thead.appendChild(trHead);

  // Cuerpo
  const tbody = document.createElement("tbody");

  data.forEach(item => {
  const tr = document.createElement("tr");
  tr.classList.add("fila-data");

    Object.keys(item).forEach(clave => {
    const td = document.createElement("td");
    td.textContent = item[clave] ;
    td.classList.add("celda-data")
    tr.appendChild(td);
   
    });
    const idClave = Object.keys(item)[0]; // toma el primer campo
    const idValor = item[idClave];
  
    // Acciones
    const tdAcciones = document.createElement("td");
    tdAcciones.classList.add("celda-data")
    const div=document.createElement("div")
    div.classList.add("content_botones")
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("Buton__entrar");
    btnEditar.setAttribute("data-id",idValor);
   btnEditar.addEventListener("click", () => callbackEditar(idValor));
   
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("Buton__entrar");
    btnEliminar.setAttribute("data-id",idValor);
   btnEliminar.addEventListener("click", () => callbackEliminar(idValor));
    // Puedes agregar el eventListener aquí
    div.append(btnEditar,btnEliminar)
    tdAcciones.append(div);
    tr.appendChild(tdAcciones);
    

    tbody.appendChild(tr);
  });

  tabla.append(thead, tbody);
  contenedor.append(header, tabla);
  main.appendChild(contenedor);
}

