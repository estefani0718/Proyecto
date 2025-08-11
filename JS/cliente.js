import { cargarModal } from "./modal.js";
import { post ,del,get} from "./metodos.js";


const usuarioId = sessionStorage.getItem("usuario_id");




const pedido =document.querySelector("#pedido");
const contenedor=document.querySelector(".content_panel");

pedido.addEventListener("click",async()=>{

 if (contenedor.innerHTML.trim() !== "") {
     contenedor.innerHTML = ""; // Limpiar contenido para ocultar
   } else {
    const enpoint="/tipopaquete/guardar"
    cargarModal('modalTipoPaquete.html',"modal-tipo-paquete",enpoint, { estado: "activo" } );
    // Aquí llamas a la función para cargar las categorías
    await cargarCategorias(); 
    contenedor
   }
})

async function cargarCategorias() {
  try {

    const res = await get("/categorias");
    const categorias = await res.json();
    console.log(categorias)
    
    const select = document.querySelector("#codigo_paquete");
    select.innerHTML = `<option value="">Seleccione una categoría</option>`;
    
    categorias.forEach(cat => {
      select.innerHTML += `<option value="${cat.codigo_paquete}">${cat.nombreCategoria}</option>`;
    });
  } catch (error) {
    console.error("Error cargando categorías:", error);
  }
}






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


