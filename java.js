let response = await fetch('/2/clip-explosion-gif/clip-explosion-gif-8.gif');

let blob = await response.blob(); // download as Blob object

// crear tag <img> para imagen
let img = document.createElement('img');
img.style = 'position:fixed;top:10px;left:10px;width:100px';
document.body.append(img);

// mostrar
img.src = URL.createObjectURL(blob);

setTimeout(() => { // ocultar luego de tres segundos
  img.remove();
  URL.revokeObjectURL(img.src);
}, 3000);


//me aparece la imagen. en pequeno.