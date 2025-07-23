async function usuarios() {
  try {
    const endpoint = await fetch("http://localhost:8080/ProyectoDomiexpro/api/usuarios");

    if (!endpoint.ok) {
      throw new Error("Error al obtener usuarios: " + endpoint.status);
    }

    const datos = await endpoint.json();
    // console.log(datos);
    crear(datos);
  } catch (error) {
    console.error("Error en la función usuarios():", error.message);
  }
}

usuarios();

async function crear(data) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("caja-tabla");

  const tabla = document.createElement("table");
  tabla.classList.add("mi-tabla");

  // Encabezado
  const encabezado = document.createElement("thead");
  const filaEncabezado = document.createElement("tr");

  const columnas = [
    "ID", "Nombre", "Documento", "Tipo Documento", "Género", "Dirección",
    "Teléfono", "Correo", "Estado", "Rol", "Residencia", "Tipo Cliente",
    "Usuario", "Contraseña", "Opciones"
  ];

  columnas.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    th.classList.add("celda-header");
    filaEncabezado.appendChild(th);
  });

  encabezado.appendChild(filaEncabezado);

  // Cuerpo
  const cuerpo = document.createElement("tbody");

  data.forEach(usuario => {
    const fila = document.createElement("tr");
    fila.classList.add("fila-data");

    const crearCelda = (texto) => {
      const td = document.createElement("td");
      td.textContent = texto ?? ""; // evita "undefined"
      td.classList.add("celda-data");
      return td;
    };

    // Campos
    const tdId = crearCelda(usuario.id);
    const tdNombre = crearCelda(usuario.nombre_usuario);
    const tdDocumento = crearCelda(usuario.documento_usuario);
    const tdTipoDoc = crearCelda(usuario.tipo_documento );
    const tdGenero = crearCelda(usuario.genero_usuario);
    const tdDireccion = crearCelda(usuario.direccion_usuario);
    const tdTelefono = crearCelda(usuario.telefono_usuario);
    const tdCorreo = crearCelda(usuario.correo);
    const tdEstado = crearCelda(usuario.estado);
    const tdRol = crearCelda(usuario.rol);
    const tdResidencia = crearCelda(usuario.residencia);
    const tdTipoCliente = crearCelda(usuario.tipo_cliente);
    const tdUsuario = crearCelda(usuario.usuario);
    const tdContrasena = crearCelda(usuario.contrasena);
    console.log(usuario)
    // Acciones
    const tdAcciones = document.createElement("td");

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("button");
    btnEditar.setAttribute("data-id", usuario.id);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("button");
    btnEliminar.setAttribute("data-id", usuario.id);

    tdAcciones.append(btnEditar, btnEliminar);

    // Agregar todos a la fila
    fila.append(
      tdId, tdNombre, tdDocumento, tdTipoDoc, tdGenero, tdDireccion, tdTelefono,
      tdCorreo, tdEstado, tdRol, tdResidencia, tdTipoCliente,
      tdUsuario, tdContrasena, tdAcciones
    );

    cuerpo.appendChild(fila);
  });

  tabla.append(encabezado, cuerpo);
  contenedor.appendChild(tabla);

  const main = document.querySelector("main");
  main.appendChild(contenedor);
}
