/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importe;
	var porcentage;
	


	importe=document.getElementById('sueldo').value;
			//no sirve la barra de texto por eso fue canselado. si funcionara el prompt no iria.
			//porcentage=document.getElementById('resultado').value;
	importe=parseInt(importe);
	porcentage=parseInt(porcentage);



			//agrega un prompt para poder ingresar las sumas del porcentage
			porcentage=prompt("escriba su porcentage");
			document.getElementById('resultado').value=porcentage; 
			


	resto= (importe*10)/100;
	masporcentage= resto+importe

	alert(masporcentage);


}
