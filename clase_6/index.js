//Define un array global:
listaPersonas = [];

//Definicion de un objeto (solo a modo ilustrativo no lo uso aca)
let objetoPersona = {}
//Definicion de un objeto con atributos
let objetoPersona2 = {
  nombre : "Juan",
  apellido : "Perez"
}

function Persona(nombre, apellido, edad, genero, maneja, nada, bici,nacion){
  //Atributos

  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.genero = genero
  this.maneja = maneja
  this.nada = nada
  this.bici = bici
  this.nacion = nacion

  //Metodos
  this.Saludar = Saludar
  this.Nadar = ValidoNado
}
function Saludar()
{
  console.log("Mi nombre es: " +this.nombre+ " mi apellido es: "+this.apellido+" y soy "+this.nacion+". Mi genero es: "+this.genero+ ". Y "+ ValidoManeja(this.maneja) +" se manejar" )
}
function ValidoNado()
{
  return this.nada
}
function ValidoManeja(asd){
  if (asd){
    return "si"
  }else{
    return "no"
  }
}
function CuentaNadadores()
{
  listaPersonas.length

}
//espero a q se cargue todo el sitio y se renderice y despues ejecuto la funcion
window.addEventListener('load',function(){
  //me traigo el formulario completo
  var frm = this.document.getElementById('frmPersona')

  console.log(frm)
  //captura el evento sumbit, y llama a una funcion
  frm.addEventListener('submit',manejarSubmit)

});

function manejarSubmit(e)
{
  //desactiva el hecho de enviar del boton,y se queda en la misma pagina
  e.preventDefault();
  //alert("capture el evento submit")

  //Capturo los datos del formulario web
    var nombre = document.getElementById('txtNombre').value
    var apellido = document.getElementById('txtApellido').value
    var edad = parseInt(document.getElementById('txtEdad').value)
    var genero = document.getElementById('rdoMasculino').checked
    if (genero){
      genero = "Masculino"
    }else
    {
      genero = "Femenino"
    }
    var maneja = document.getElementById('chkManeja').checked
    var nada = document.getElementById('chkNada').checked
    var bici = document.getElementById('chkBicicleta').checked
    var nacion = document.getElementById('selPais').value
  //aca voy a crear una persona
  let nuevaPersona = new Persona(nombre,apellido,edad,genero,maneja,nada,bici,nacion)
  //meto en la lista la persona creada, cada vez q le da al btn submit
  listaPersonas.push(nuevaPersona)
  console.log(listaPersonas)
  //////////////llamo a la funcion saludar///////////
  //listaPersonas[0].Saludar()
  //Cargo el nombre de la persona en el otro formulario
  document.getElementById('txtNombre2').value = nuevaPersona.nombre
  document.getElementById('txtApellido2').value = nuevaPersona.apellido
  document.getElementById('txtEdad2').value = nuevaPersona.edad
  if(nuevaPersona.genero == "Masculino"){
    document.getElementById('rdoMasculino2').checked = true;
  }else{
    document.getElementById('rdoFemenino2').checked = true;
  }
  document.getElementById('chkNada2').checked = nuevaPersona.nada
  limpiarFormulario()
}
function limpiarFormulario()
{
    document.getElementById('txtNombre').value = '';
}
function cargarFormulario (persona)
{


}
//Muestro por consola todo
for (const iterator of listaPersonas) {
  console.log(iterator.Saludar())
}



