/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	//pide el nombre y lo guarda en nombre
	nombre = prompt("Ingrese su nombre ");
	//mete dentro del coso con id elNombre lo que esta dentro d la variable nombre
	document.getElementById("elNombre").value = nombre;
}

