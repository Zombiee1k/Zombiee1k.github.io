var miBoton = document.getElementById('boton');
      miBoton.addEventListener('click', function() {
        // Esta función se ejecutará cuando se haga clic en el botón.
        window.location.href = 'https://store.steampowered.com/app/739630/Phasmophobia/';
        
        // Puedes agregar más código aquí según tus necesidades.
      });
	  
document.getElementById('my-button').addEventListener('click', function() {
        // Esta función se ejecutará cuando se haga clic en el botón.
        primerboton();
        
        // Puedes agregar más código aquí según tus necesidades.
      });;
	  
 function primerboton() {
		cambiarEstilos();
        var audio = document.getElementById('miAudio');
        audio.play();
    }
	
	
function cambiarEstilos() {
        // Cambiar la visibilidad del elemento con id 'miElemento'
		document.getElementById('my-button').style.visibility = 'hidden';
        document.getElementById('texto').style.visibility = 'visible';
		document.getElementById('boton').style.visibility = 'visible';
		document.getElementById('letras').style.visibility = 'visible';
		document.getElementById('letras2').style.visibility = 'visible';

        // Cambiar el fondo del body
        document.body.style.backgroundImage = "url('iphone.jpg')";
    }