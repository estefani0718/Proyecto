// modal.js
import { validarFormulario } from "./validaciones.js";
import { post ,del} from "./metodos.js";


export  function abrirModal(idModal,enpoint) {
  const modal = document.querySelector(idModal);
  if (!modal) return console.warn("Modal no encontrado:", idModal);

  modal.showModal();

    const form = document.querySelector(".form-doc");
    form.addEventListener("submit",async (e) => {
        e.preventDefault();

        const btnClickeado = document.activeElement;
        if (btnClickeado.id === "btn_guardar") {
            const datos =validarFormulario(e.target);
             const res = await post(enpoint, datos);
                const result = await res.json();
                console.log(result)
                if (result.ok) {
                  alert("tipo documento registrado correctamente");
                  form.reset(); 
                } else {
                  alert("❌ Error: " + result);
                }
            
        } else if (btnClickeado.id === "btn_actualizar") {
            const btnactu=document.querySelector("#btn_actualizar")
            btnactu.style.display="inline-block";
            alert("Actualizando...");
        }
        else if(btnClickeado.id === "btn__cancelar"){  
          cerrarModal(idModal)
          alert("cerrando...")
        }
    });
}


export function cerrarModal(idModal) {
  const modal = document.querySelector(idModal);
  if (!modal) return console.warn("Modal no encontrado:", idModal);

  modal.close(); 
}
export async function cargarModal(ruta, idModal,enpoint) {
  // 1. Sólo carga e inserta si no existe ya
  if (!document.querySelector(`#${idModal}`)) {
    const res = await fetch(`../MODAL/${ruta}`);
    if (!res.ok) throw new Error('No se pudo cargar el modal');
    
    const html = await res.text();
    document.body.insertAdjacentHTML('beforeend', html);
  }

  // 2. Ahora sí abre con tu función
  abrirModal(`#${idModal}`,enpoint);
}



export async function confirmarEliminacion(id, endpoint) {
  const confirmar = confirm("¿Estás seguro de que deseas eliminar este registro?");

  if (confirmar) {
    try {
      const res = await del(endpoint, id);

      if (!res.ok) {
        alert("No se pudo eliminar el registro.");
        return;
      }

      alert("Registro eliminado correctamente.");
      // Aquí podrías recargar la tabla o actualizar la vista
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Ocurrió un error al eliminar el registro.");
    }
  } else {
    alert("Eliminación cancelada por el usuario.");
  }
}
export async function confirmarActualizacion(id, datosActualizados, endpoint) {
  const confirmar = confirm("¿Estás seguro de que deseas actualizar este registro?");

  if (confirmar) {
    try {
      const res = await put(endpoint, id, datosActualizados);

      if (!res.ok) {
        alert("No se pudo actualizar el registro.");
        return;
      }

      const resultado = await res.json();
      alert(resultado.mensaje || "Registro actualizado correctamente.");
      // Aquí podrías recargar la tabla o actualizar la vista
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Ocurrió un error al actualizar el registro.");
    }
  } else {
    alert("Actualización cancelada por el usuario.");
  }
}


