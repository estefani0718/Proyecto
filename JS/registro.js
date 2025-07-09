import { validarText, validarNum, campo } from "./validaciones.js";

const formulario = document.querySelector("#form__registro");

const nombre = formulario.querySelector('input[name="nombre"]');
const tDocumento = formulario.querySelector('select[name="tipoDocumento"]');
const documento = formulario.querySelector('input[name="documento"]');
const generos = formulario.querySelectorAll('input[name="genero"]');
const direccion = formulario.querySelector('input[name="direccion"]');
const telefono = formulario.querySelector('input[name="telefono"]');
const tTransporte = formulario.querySelector('input[name="tipoTransporte"]');
const email = formulario.querySelector('input[name="email"]');
const residencia = formulario.querySelector('select[name="residencia"]');
const usuario = formulario.querySelector('input[name="usuario"]');
const contrasena = formulario.querySelector('input[name="contrasena"]');
const tTipocliente = formulario.querySelector('select[name="tipoCliente"]');

nombre.addEventListener("keydown", validarText);
documento.addEventListener("keydown", validarNum);
nombre.addEventListener("blur", campo);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();


});
