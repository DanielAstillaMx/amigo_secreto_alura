// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarLista();
    
    // Limpiar el resultado anterior si existe
    limpiarResultado();
}

// Función para actualizar la visualización de la lista
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${amigo}</span>
            <button onclick="eliminarAmigo(${index})" class="button-remove" title="Eliminar ${amigo}">
                ✕
            </button>
        `;
        li.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            margin: 5px 0;
            background-color: #f0f0f0;
            border-radius: 15px;
            border: 1px solid #ddd;
        `;
        
        // Estilo para el botón de eliminar
        const removeButton = li.querySelector('.button-remove');
        removeButton.style.cssText = `
            background-color: #ff4757;
            color: white;
            border: none;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
        `;
        
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
    limpiarResultado();
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Validar que hay amigos en la lista
    if (amigos.length === 0) {
        alert('Agregue al menos un nombre antes de sortear.');
        return;
    }
    
    // Generar número aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    resultado.innerHTML = `
        <li style="font-size: 24px; color: #05DF05; font-weight: bold; text-align: center; padding: 20px;">
            🎉 El amigo secreto es: <span style="text-decoration: underline;">${amigoSeleccionado}</span> 🎉
        </li>
    `;
    
    // Agregar efecto de animación
    resultado.style.animation = 'fadeIn 0.8s ease-in-out';
}

// Función para limpiar el resultado
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// Permitir agregar nombres con la tecla Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Agregar estilos CSS para la animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .button-remove:hover {
            background-color: #ff3742 !important;
            transform: scale(1.1);
        }
        
        .name-list li:hover {
            background-color: #e8e8e8 !important;
        }
    `;
    document.head.appendChild(style);
});
