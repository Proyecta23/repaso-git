/**
 * Script de práctica - Academia Apps Script
 * Autor: Ivan Beltran
 * Fecha: 2026-02-07
 * Propósito: Demostrar Git + GitHub + clasp workflow
 */

/**
 * Función de saludo básica
 * Imprime mensaje de bienvenida en el log
 */
function saludar() {
  Logger.log('Hola Mundo');
}

/**
 * Función de despedida
 * Imprime mensaje de despedida en el log
 */
function despedirse() {
  Logger.log('Adiós Mundo');
}

/**
 * Multiplica dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} El producto de a * b
 */
function multiplicar(a, b) {
  return a * b;
}
```

### 4️⃣ Hacer commit
- Scroll abajo hasta **"Commit changes"**
- **Commit message:** `Agregada documentación JSDoc completa`
- **Extended description:**
```
- Agregado header con información del proyecto
- Documentadas todas las funciones con JSDoc
- Agregados comentarios descriptivos
