import { cargarModal } from "./validaciones.js";


 const usuarioId = sessionStorage.getItem("usuario_id");






  if (!usuarioId) {
    alert("Debes iniciar sesión");
    window.location.href = "index.html";
    return;
  }
 

const factura=document.querySelector("#factura");

  factura.addEventListener("click",async()=>{
  
   if (contenedor.innerHTML.trim() !== "") {
       contenedor.innerHTML = ""; // Limpiar contenido para ocultar
     } else {
      const enpoint=""
      cargarModal('modalFactura.html',"modal-factura",enpoint, { estado: "activo" } );
      // Aquí llamas a la función para cargar las categorías
      await cargarCategorias(); 
      contenedor
     }
  });

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
    modal = await cargarModal('../MODAL/modalNotificaciones.html', '.content__user', 'modalNotificaciones');
  }

  if (modal) {
    modal.classList.toggle('oculto');
  }
});


