listaPersonas = [];

function Persona(nombre, apellido, edad, genero... y todo lo que pide el form){
  this.nombre = nombre
  this.edad = edad


}

//espero a q se cargue todo el sitio y se renderice y despues ejecuto la funcion
window.addEventListener('load',function(){
  //me traigo el formulario completo
  var frm = this.document.getElementById('frmPersona')

  console.log(frm)
  //captura el evento sumbit, y llama a una funcion
  frm.addEventListener('submit',manejarSubmit)

});

function manejarSubmit(e){
  //desactiva el hecho de enviar del boton
  e.preventDefault();
  alert("capture el evento submit")
  var frm = e.target;
  //aca voy a crear una persona
  var nuevaPersona = new Persona(pasarle los param);
  //meto en la lista la persona creada
  listaPersonas.push(nuevaPersona)
}
