import { validarText, validarNum, campo, validarFormulario} from "./validaciones.js";
const formulario = document.querySelector("#form__login");

const usuario = formulario.querySelector('input[name="usuario"]');
const contrasena = formulario.querySelector('input[name="contrasena"]');

formulario.addEventListener("submit",validarFormulario);