// Definiciones de tipos globales para el proyecto
// Este archivo puede contener tipos que se utilizarán en toda la aplicación

// Ejemplo de tipo global para configuración de la aplicación
export interface AppConfig {
  apiUrl?: string;
  environment?: 'development' | 'production' | 'test';
  debug?: boolean;
}

// Ejemplo de tipo para componentes genéricos
export interface ComponentConfig {
  container: HTMLElement;
  options?: Record<string, unknown>;
}

// Tipos de utilidad comunes
export type Nullable<T> = T | null;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;