// arreglo donde guardo los libros
let biblioteca = [
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Ficción",
    disponible: true
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopía",
    disponible: true
  }
];  

// leer los libros 
function leerLibros(callback) {
  console.log("Leyendo libros...");
  
  setTimeout(() => {
    callback(biblioteca); // regresa los datos
  }, 1000);
}

// guardar cambios

function guardarLibros(nuevosDatos, callback) {
  console.log("Guardando...");
  
  setTimeout(() => {
    biblioteca = nuevosDatos; // actualiza los datos
    callback("Guardado correctamente");
  }, 1000);
}

// muestra todos los libros
function mostrarLibros() {
  leerLibros((libros) => {
    console.log("\nLista de libros:");

    libros.forEach((libro, i) => {
      console.log(
        `${i + 1}. ${libro.titulo} - ${
          libro.disponible ? "Disponible" : "Prestado"
        }`
      );
    });
  });
}

// agrega un libro nuevo
function agregarLibro(libro) {
  leerLibros((libros) => {
    libros.push(libro); // lo agrega al arreglo

    guardarLibros(libros, (msg) => {
      console.log(msg);
      mostrarLibros(); // vuelve a mostrar la lista
    });
  });
}

// cambia si un libro está disponible o no
function actualizarDisponibilidad(titulo, estado) {
  leerLibros((libros) => {
    const libro = libros.find(l => l.titulo === titulo);

    if (!libro) {
      console.log("No existe ese libro");
      return;
    }

    libro.disponible = estado;

    guardarLibros(libros, (msg) => {
      console.log(msg);
      mostrarLibros();
    });
  });
}



// mostrar libros al inicio
mostrarLibros();

// agregar libro después de 2 segundos
setTimeout(() => {
  agregarLibro({
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    genero: "Programación",
    disponible: true
  });
}, 2000);

// cambiar estado después de 4 segundos
setTimeout(() => {
  actualizarDisponibilidad("1984", false);
}, 4000);