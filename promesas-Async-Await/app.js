const MESAS_DISPONIBLES = 5;

const btn = document.getElementById("btnReservar");
const resultado = document.getElementById("resultado");

function mostrar(mensaje, tipo = "info") {
    const p = document.createElement("p");
    p.textContent = mensaje;
    p.classList.add("mensaje", tipo);
    resultado.appendChild(p);
}

function limpiar() {
    resultado.innerHTML = "";
}

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mesasSolicitadas <= MESAS_DISPONIBLES) {
                resolve("✅ Mesas disponibles");
            } else {
                reject("❌ No hay suficientes mesas");
            }
        }, 1000);
    });
}

function enviarConfirmacion(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3;
            if (exito) {
                resolve(`📧 Correo enviado a ${nombreCliente}`);
            } else {
                reject("❌ Error al enviar el correo");
            }
        }, 1000);
    });
}

async function hacerReserva(nombre, mesas) {
    try {
        limpiar();
        mostrar("🔍 Verificando disponibilidad...", "info");
        const disponibilidad = await verificarDisponibilidad(mesas);
        mostrar(disponibilidad, "success");
        mostrar("📧 Enviando confirmación...", "info");
        const confirmacion = await enviarConfirmacion(nombre);
        mostrar(confirmacion, "success");
        mostrar("🎉 Reserva completada", "success");
    } catch (error) {
        mostrar(error, "error");
    }
}

btn.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const mesas = parseInt(document.getElementById("mesas").value);
    if (!nombre || !mesas) {
        mostrar("⚠️ Completa todos los campos", "warning");
        return;
    }
    if (mesas <= 0) {
        mostrar("⚠️ Ingresa un número válido", "warning");
        return;
    }
    hacerReserva(nombre, mesas);
});