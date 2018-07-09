/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	
	//parseint sirve para transformar en verdaderos los numeros
	

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resulto=numeroUno+numeroDos;


	alert("La Suma es " + resulto)
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	
	//parseint sirve para transformar en verdaderos los numeros
	

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resulto=numeroUno-numeroDos;


	alert("la resta es " + resulto);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	
	//parseint sirve para transformar en verdaderos los numeros
	

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resulto=numeroUno*numeroDos;


	alert("La multiplicacion es " + resulto);
}

	function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	
	//parseint sirve para transformar en verdaderos los numeros
	

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resulto=numeroUno/numeroDos;


	alert("La division es " + resulto);
}

