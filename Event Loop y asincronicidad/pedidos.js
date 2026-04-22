let contador = 0;

const listaPedidos = document.getElementById("listaPedidos");
const btnPedido = document.getElementById("btnPedido");

btnPedido.addEventListener("click", agregarPedido);

// Crear pedido
function agregarPedido() {
  contador++;

  const pedido = {
    id: contador,
    estado: "En Proceso"
  };

  console.log("Nuevo pedido:", pedido.id);

  renderPedido(pedido);
  procesarPedido(pedido);
}

// Mostrar en pantalla
function renderPedido(pedido) {
  const div = document.createElement("div");
  div.classList.add("pedido");
  div.id = `pedido-${pedido.id}`;

  div.innerHTML = `
    <div class="fila">
      <strong>Pedido #${pedido.id}</strong>
      <span class="proceso">${pedido.estado}</span>
    </div>
  `;

  listaPedidos.appendChild(div);
}

// Actualizar estado
function actualizarEstado(id, estado) {
  const pedidoDiv = document.getElementById(`pedido-${id}`);
  const span = pedidoDiv.querySelector("span");

  span.textContent = estado;
  span.className = estado === "Completado" ? "completado" : "proceso";

  console.log("Pedido listo:", id);
}

// Simular preparación (Promise)
function simularPreparacion(pedido) {
  return new Promise((resolve) => {
    const tiempo = Math.random() * 5000 + 1000;

    setTimeout(() => {
      resolve(pedido.id);
    }, tiempo);
  });
}

// Async/Await
async function procesarPedido(pedido) {
  const id = await simularPreparacion(pedido);
  actualizarEstado(id, "Completado");
}