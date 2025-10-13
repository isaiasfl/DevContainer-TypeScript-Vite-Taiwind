// Punto de entrada principal de la aplicación
import './styles/tailwind.css';

import { initializeApp, saludar, crearUsuario, type Usuario } from './app';

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación TypeScript + Vite iniciada');
  
  // Inicializar la aplicación
  initializeApp();
  
  // Ejemplos de uso de TypeScript
  const mensaje: string = saludar('Estudiante');
  console.log(mensaje);
  
  // Crear un usuario de ejemplo
  const usuario: Usuario = crearUsuario(1, 'Juan Pérez', 'juan@ejemplo.com');
  console.log('Usuario creado:', usuario);
  
  // Actualizar el contenido del DOM
  const appElement = document.getElementById('app');
  if (appElement) {
    const mainElement = appElement.querySelector('main');
    if (mainElement) {
      mainElement.innerHTML = `
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">¡Bienvenido a TypeScript!</h2>
          <p class="text-gray-600 mb-4">${mensaje}</p>
          <div class="bg-blue-50 border border-blue-200 rounded p-4">
            <h3 class="font-semibold text-blue-800 mb-2">Ejemplo de Usuario:</h3>
            <pre class="text-sm text-blue-700">${JSON.stringify(usuario, null, 2)}</pre>
          </div>
          <div class="mt-6">
            <button id="btn-ejemplo" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Probar Tipado
            </button>
          </div>
        </div>
      `;
      
      // Añadir evento al botón
      const botonEjemplo = document.getElementById('btn-ejemplo') as HTMLButtonElement;
      if (botonEjemplo) {
        botonEjemplo.addEventListener('click', () => {
          probarTipado();
        });
      }
    }
  }
});

// Función de ejemplo para demostrar el tipado
function probarTipado(): void {
  const numeros: number[] = [1, 2, 3, 4, 5];
  const duplicados: number[] = numeros.map((n: number) => n * 2);
  
  console.log('Números originales:', numeros);
  console.log('Números duplicados:', duplicados);
  
  // Mostrar resultado en una alerta
  alert(`Números originales: ${numeros.join(', ')}\nNúmeros duplicados: ${duplicados.join(', ')}`);
}