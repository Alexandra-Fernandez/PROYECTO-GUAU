window.addEventListener("load",function(){
	var imagen = document.getElementsByClassName("imagen");

	for (var i=0; i<imagen.length; i++) {
		imagen[i].addEventListener("mouseover",function(e){
		e.preventDefault();
		mouseoverImagen(this);
		});

		imagen[i].addEventListener("mouseout",function(){
		mouseoutImagen(this);
		});
	}

	function mouseoverImagen(miDiv){
		
		var rutaImagen = miDiv.getElementsByTagName('img')[0].src;
		var posicion = rutaImagen.lastIndexOf("/") + 1;
		var nombreConExtension = rutaImagen.substr(posicion);
		var numeroDog = nombreConExtension.split('_')[0];
		var nombreDogFoto2 = "img/" + numeroDog + "_foto2.png";

		miDiv.getElementsByTagName('img')[0].src = nombreDogFoto2;
		//document.body.style.cursor = "img/dog_hueso.png"; 
	}
	function mouseoutImagen(miDiv){

		var rutaImagen = miDiv.getElementsByTagName('img')[0].src;
		var posicion = rutaImagen.lastIndexOf("/") + 1;
		var nombreConExtension = rutaImagen.substr(posicion);
		var numeroDog = nombreConExtension.split('_')[0];
		var nombreDogFoto1 = "img/" + numeroDog + "_foto1.png";

		miDiv.getElementsByTagName('img')[0].src = nombreDogFoto1;
	}
});