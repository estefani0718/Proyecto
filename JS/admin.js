import { cargarTablaGeneral } from "./crearTabla.js";
import { cargarModal ,confirmarEliminacion} from "./modal.js";



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
    const enpoint="/TipoDocumento/crear"
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/TipoDocumento",
      ["codigo_Tdocumento", "tipo_Documento"],
      () => {
        cargarModal('modalDocumento.html',"modal-doc",enpoint)
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/TipoDocumento`;
      
        confirmarEliminacion(id, enpoint);
       },
      contenedor
      // Aquí se pega la tabla
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
        const enpoint="/TipoTransporte/crear";
         cargarModal('modalTipoTransporte.html',"modal-transporte",enpoint)
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
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
         const enpoint="/residencia/crear";
         cargarModal('modalTipoTransporte.html',"modal-transporte",enpoint)
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
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
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
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
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
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
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
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
        
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
       },
      contenedor // Aquí se pega la tabla
    );
  }
});
transporteusu.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/transporteUsuario",
      ["codigo_TransporteUsuario", "placa","documento_usuario","Estado","añoss_experiencia"],
      () => {
        
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
       },
      contenedor // Aquí se pega la tabla
    );
  }
});
tipopaa.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/tipopaquete",
      ["codigo_paquete ", "nombre_paquete","detalles","codigo_paquete","estado","origen","metodo_pago","destino"],
      () => {
        
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
       },
      contenedor
       // Aquí se pega la tabla
    );
  }
});

factura.addEventListener("click", () => {
  // Si ya hay una tabla visible, se oculta
  if (contenedor.innerHTML.trim() !== "") {
    contenedor.innerHTML = ""; // Limpiar contenido para ocultar
  } else {
    cargarTablaGeneral(
      "http://localhost:8080/ProyectoDomiexpro/api/facturas",
      ["codigo_factura ", "fecha_entrega","documento_usuario","nombre","detalles","total","estado","valorPaquete",],
      () => {
        
      },(id) => {
         alert("hola",id)
      },(id) => {
        const enpoint=`/`;
      
        confirmarEliminacion(id, enpoint);
       },
      contenedor // Aquí se pega la tabla
    );
  }
});


