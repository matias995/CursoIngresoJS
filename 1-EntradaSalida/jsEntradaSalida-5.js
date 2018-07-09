/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var suNombre;
	var suEdad;

		suNombre=document.getElementById('elNombre').value;
		suEdad=document.getElementById('laEdad').value;

	alert(suNombre+(" ")+suEdad);



}

