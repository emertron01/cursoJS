//Tema DOM
//Define una variable y le mete un array de lo q tenga un tag tipo div y dsps lo muestra x consola
//let div = document.getElementsByTagName('div')
//otra forma
let div = document.getElementById('miDiv');
//muestra los hijos del div
let hijos = div.children
//console.log(div)
//console.log(hijos)
//let primerHijo = div.firstElementChild
//hijos[5].style.backgroundColor = "red"
console.log(hijos)
let p1 = document.getElementById('p1')
console.log(p1)
let padre = p1.parentNode
console.log(padre)
let titulo = document.getElementById('titulo')
console.log(titulo)
let hermano = titulo.nextElementSibling.nextElementSibling
console.log(hermano)

let body = document.body
console.log(body)
let h2 = body.lastElementChild
console.log(h2.previousElementSibling)
