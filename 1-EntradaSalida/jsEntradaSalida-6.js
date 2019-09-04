/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var n1,n2,res;

    n1 = document.getElementById("numeroUno").value
    n2 = document.getElementById("numeroDos").value
    //le clava parseInt para que interprete q son numeros
    res = parseInt(n1) + parseInt(n2);
    alert ("La suma es " + res);
}

