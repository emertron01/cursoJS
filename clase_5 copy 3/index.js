//Funcion constructura de objetos, es como la clase en java

function Persona (nombre,apellido,edad){
    //el this va siempre en una funcion de tipo objeto
    this.nombre = nombre;
    this.apellido = apellido
    this.edad = edad

    this.saludar = function(){
        console.log("Hola soy " + this.nombre )
    }
}
//instancio un objeto
var x = new Persona("jose","lopez", 22);
//muestro los attrib del objeto
console.log(x)
//con "prototype" puedo agregar un atributo
Persona.prototype.genero = "mujer"
//llamo a una property de un objeto que adentro tiene otra funcion, que es la de saludar
x.saludar()
