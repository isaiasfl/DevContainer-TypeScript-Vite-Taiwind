module.exports = {
  // Entorno en el que se ejecutará el código
  env: {
    browser: true,      // Navegador web
    es2021: true,       // Características de ES2021
    node: true          // Node.js
  },
  
  // Configuración heredada de ESLint recomendada
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  
  // Parser que se utilizará para analizar el código
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',  // Última versión de ECMAScript
    sourceType: 'module',   // Módulos ES
    project: './tsconfig.json'
  },
  
  // Plugins disponibles
  plugins: ['@typescript-eslint'],
  
  // Reglas personalizadas de ESLint
  rules: {
    // Forzar el uso de punto y coma al final de las sentencias
    'semi': ['error', 'always'],
    
    // Forzar el uso de comillas dobles
    'quotes': ['error', 'double'],
    
    // Forzar el uso de 2 espacios para indentación
    'indent': ['error', 2],
    
    // Evitar variables no utilizadas
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    
    // Forzar el uso de === en lugar de ==
    'eqeqeq': 'error',
    
    // Evitar console.log en producción (advertencia)
    'no-console': 'warn',
    
    // Reglas específicas de TypeScript
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn'
  }
}