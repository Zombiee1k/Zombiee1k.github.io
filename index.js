const fotos = [];
let paginaprinc = true;
    for (let i = 1; i <= 66; i++) {
      fotos.push(`images/${i}.jpeg`);
    }

    let indiceActual = obtenerIndiceAleatorio();
    const intervalo = 7000; // 5000 milisegundos = 5 segundos

    // Cargar la primera imagen aleatoria al cargar la página
    document.getElementById('imagenPresentacion1').src = fotos[indiceActual];

    function obtenerIndiceAleatorio() {
      return Math.floor(Math.random() * fotos.length);
    }

    function cambiarFoto() {
	  if (paginaprinc) {
		const imagen1 = document.getElementById('imagenPresentacion1');
		const imagen2 = document.getElementById('imagenPresentacion2');

      // Obtener un índice aleatorio para seleccionar una imagen diferente a la actual
      let indiceNuevo;
      do {
        indiceNuevo = obtenerIndiceAleatorio();
      } while (indiceNuevo === indiceActual);

      // Cargar la nueva imagen en la segunda imagen
      imagen2.src = fotos[indiceNuevo];

      // Desvanecer la imagen actual
      imagen1.style.opacity = 0;

      setTimeout(function() {
        // Cambiar la imagen actual a la nueva y restaurar la opacidad
        imagen1.src = fotos[indiceNuevo];
        indiceActual = indiceNuevo;
        imagen1.style.opacity = 1;
      }, 1000); // Esperar 1 segundo antes de cambiar la imagen

        
    } else {
        // Detener el intervalo si paginaprinc es false
        clearInterval(intervaloID);
    }
    }
	
	function cambiarColorLetras() {
  const titulo = document.querySelector('.titulo');

  setInterval(function(letra) {
    // Generar un color aleatorio en formato hexadecimal
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Aplicar el nuevo color al estilo del elemento
    titulo.style.color = colorAleatorio;
  }, 3000); // Cambia el color cada 5 segundos (5000 milisegundos)
}

// Llamar a la función para iniciar el cambio de color
window.onload = cambiarColorLetras;

    // Iniciar la presentación automáticamente y repetirla cada 5 segundos
 var intervaloID = setInterval(cambiarFoto, intervalo);
// Llamadas a funciones
const archivosDeAudio = ['gref', 'gref2'];


function entrar (nombre){
	paginaprinc = false;
	document.getElementById('textotitulo').style.display="none";
	document.getElementById('imagenPresentacion1').style.display="none";
	document.getElementById('imagenPresentacion2').style.display="none";
	document.getElementById('grid-container').style.display="none";
	
	const fondoAnimado = document.getElementById('fondo-animado');

            // Puedes cambiar el nombre del archivo a tu archivo MP4
    fondoAnimado.src = 'fondo.mp4';

            // Reproduce el video automáticamente
    fondoAnimado.play();
	document.getElementById('textotitulo2').style.display="block";
	document.getElementById('example').style.display="block";
	document.body.style.background = "linear-gradient(201deg, rgba(84,116,201,0.8015581232492998) 0%, rgba(40,5,5,0.7483368347338936) 0%, rgba(190,180,180,1) 0%, rgba(77,145,130,1) 100%, rgba(118,57,57,0.7483368347338936) 100%)";
	document.getElementById('titulo4').style.display="inline";
	const audioAleatorio = archivosDeAudio[Math.floor(Math.random() * archivosDeAudio.length)];
	document.getElementById(audioAleatorio).play();
	document.getElementById(audioAleatorio).loop = "true";
	document.getElementById('titulo4').innerHTML = "Insultando a " + nombre;
	document.getElementById('imagen').src = "perfil/" + nombre + ".png";
	empezartimer(nombre);
}

function visualizer(id) {
    var file = document.getElementById(id);
    var audio = document.getElementById("audio");
    audio.src = file.src;
    audio.loop = "true";
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 3000;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        // Deja el fondo del canvas transparente
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            var r = barHeight + (10 * (i / bufferLength));
            var g = 50 * (i / bufferLength);
            var b = 80;

            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

            x += barWidth + 1;
        }
    }

    audio.play();
    renderFrame();
}



function obtenerPalabraAleatoria(palabras) {
            const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
            return palabraAleatoria;
        }

        // Función para cargar y mostrar una palabra aleatoria
function cargarPalabraAleatoria(nombre) {
    fetch('palabras.txt')
        .then(response => response.text())
        .then(data => {
            const palabras = data.split('\n').filter(palabra => palabra.trim() !== '');
            let palabraA = obtenerPalabraAleatoria(palabras);

            document.getElementById("insulto").innerHTML = nombre + " el más " + palabraA;
        })
        .catch(error => console.error('Error al cargar el archivo de palabras:', error));
}







function confeti(){
	const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}


//Para el timer
function empezartimer(nombre){

        function getRandomTime() {
            // Generar un número aleatorio entre 35 y 60 segundos
            return Math.floor(Math.random() * (60 - 35 + 1)) + 35;
        }

        // Obtener un tiempo aleatorio y sumarlo al tiempo actual
        var twoDaysFromNow = Math.floor(new Date().getTime() / 1000) + getRandomTime();
		document.getElementById("insulto").style.display="block";
  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    
    .ifEnded(() => {
		cargarPalabraAleatoria(nombre);
		setTimeout(function() {
        document.getElementById("insulto").style.opacity = '1';
		}, 500);
		confeti();// 500 milisegundos de retraso (ajusta según sea necesario)
    });
	
};






document.getElementById('cuadrado1').addEventListener('click', function() {
   var audio = document.getElementById('pozo');
  audio.play();
  entrar("Pozo");
});

document.getElementById('cuadrado2').addEventListener('click', function() {
	var audio = document.getElementById('paton');
	audio.play();
	entrar("Paton");
});


document.getElementById('cuadrado3').addEventListener('click', function() {
	var audio = document.getElementById('ucar');
	audio.play();
	entrar("Úcar");
});

document.getElementById('cuadrado4').addEventListener('click', function() {
	var audio = document.getElementById('comas');
	audio.play();
	entrar("Comas");
});

document.getElementById('cuadrado5').addEventListener('click', function() {
	var audio = document.getElementById('luis');
	audio.play();
	entrar("Luis");
});

document.getElementById('cuadrado6').addEventListener('click', function() {
	var audio = document.getElementById('luming');
	audio.play();
	entrar("Luming");
});
	
document.getElementById('cuadrado7').addEventListener('click', function() {
	var audio = document.getElementById('paniagua');
	audio.play();
	entrar("Paniagua");
});

document.getElementById('cuadrado8').addEventListener('click', function() {
	document.getElementById('grid-container').style.display="none";
	document.getElementById('textotitulo').style.display="none";
	document.getElementById("imagenPresentacion1").style.filter = "none";
	document.getElementById("imagenPresentacion1").style.webkitBackdropFilter = 'none';
	document.getElementById("imagenPresentacion2").style.filter = "none";
	document.getElementById("imagenPresentacion2").style.webkitBackdropFilter = 'none';
	const numerorandom = Math.floor(Math.random() * 5);
	console.log(numerorandom);
	visualizer(numerorandom);

});