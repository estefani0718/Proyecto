import { cargarTablaGeneral } from "./crearTabla.js";

const tipo = document.querySelector("#tipoDocumento");
const trasnporte=document.querySelector("#tipoTransporte")
const contenedor = document.querySelector("#contenedorGeneral");
const residencia=document .querySelector("#residencia");
const categoria=document.querySelector("#categoriapaquete")
const roles=document.querySelector("#roles");
const estados=document.querySelector("#estados");
const usuarios=document.querySelector("#usuarios");
const transporteusu=document.querySelector("#transporte");
const factura=document.querySelector("#factura");
const tipopaa=document.querySelector("#paquete");
tipo.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/TipoDocumento",
      ["codigo_Tdocumento", "tipo_Documento"],
      () => {
        console.log("Crear nuevo tipo de documento");
      },
      contenedor // Aquí se pega la tabla
    );
  }
});

trasnporte.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/TipoTransporte",
      ["placa", "nombre_transporte","modelo_vehiculo"],
      () => {
        console.log("Crear nuevo tipo de documento");
      },
      contenedor // Aquí se pega la tabla
    );
  }
});
residencia.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/residencia",
      ["codigo_residencia", "nombre_municipio"],
      () => {
        console.log("Crear nuevo tipo de documento");
      },
      contenedor // Aquí se pega la tabla
    );
  }
});
categoria.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/categorias",
      ["codigoPaquete", "nombre_categoria"],
      () => {
        console.log("Crear nuevo tipo de documento");
      },
      contenedor // Aquí se pega la tabla
    );
  }
});
roles.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/roles",
      ["codigo_rol", "nombre_rol"],
      () => {
        console.log("Crear nuevo tipo de documento");
      },
      contenedor // Aquí se pega la tabla
    );
  }
});
estados.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/estados",
      ["id_estado", "nombre_estado","nombre_entidad"],
      () => {
        console.log("Crear nuevo tipo de documento");
      },
      contenedor // Aquí se pega la tabla
    );
  }
});
usuarios.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/usuarios",
      ["id", "nombre","documento","codigo_documento","genero","direccion","telefono","correo","estado","rol","residencia","usaurio","contraseña"],
      () => {
        
      },
      contenedor // Aquí se pega la tabla
    );
  }
});

