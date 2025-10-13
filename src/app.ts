/**
 * Lógica principal de la aplicación
 * Este archivo puede contener la inicialización y configuración global
 */

// Función de inicialización
export function initializeApp(): void {
  console.log('Inicializando aplicación TypeScript...');
  
  // Aquí puedes configurar el estado inicial de tu aplicación
  // Por ejemplo: variables globales, configuraciones, etc.
}

// Ejemplo de función con tipado básico
export function saludar(nombre: string): string {
  return `¡Hola, ${nombre}! Bienvenido a TypeScript con Vite`;
}

// Ejemplo de interfaz básica
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

// Ejemplo de función que trabaja con la interfaz
export function crearUsuario(id: number, nombre: string, email: string): Usuario {
  return {
    id,
    nombre,
    email,
    activo: true
  };
}