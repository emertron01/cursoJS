/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo,nuevosueldo,aumeto;
    sueldo = parseInt(document.getElementById("sueldo").value);
    aumento = sueldo * 10 / 100;
    nuevosueldo = aumento + sueldo;
    document.getElementById("resultado").value = nuevosueldo;
	
}
