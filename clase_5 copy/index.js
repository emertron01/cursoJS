//objetos
var Persona = {
  nombre : "pepe",
  edad : 30,
  geo : {
    direccion : {
        domicilio : "asd",
        altura : "123",
        codigopostal : "asd"
    },
    nacionalidad : "argentina"
  }
}
console.log(Persona.nombre+ " tiene " +Persona.edad)
console.log("vive en " + Persona.geo.direccion.domicilio)

for (i in Persona)
{
  console.log(i) //muestra las properties
  console.log(i + " : " + Persona[i])
}
///////////////////////
