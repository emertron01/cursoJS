//Define un array global:
listaPersonas = [];

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
  console.log("Mi nombre es " +this.nombre+ " mi apellido es "+this.apellido+" y soy "+this.nacion )
}
function ValidoNado()
{
  return this.nada
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

function manejarSubmit(e){
  //desactiva el hecho de enviar del boton
  e.preventDefault();
  //alert("capture el evento submit")
  var frm = e.target;
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
    var nuevaPersona = new Persona(nombre,apellido,edad,genero,maneja,nada,bici,nacion)
  //meto en la lista la persona creada
  listaPersonas.push(nuevaPersona)
  console.log(listaPersonas)

}