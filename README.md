# 🧠 Configuración Personalizada de Cursor

Este proyecto muestra cómo personalicé Cursor para desarrollo asistido por IA de forma más eficiente.

## 🚀 Configuración incluida

- Activado `"preferMcp": true` para usar Protocolos Modelo-Copiloto (MCPs).
- Reglas personalizadas para:
  - Markdown sin vista previa
  - Impresión de variables clara
  - No ejecutar servidores automáticamente
  - Aplicar dark mode en front-end
  - Permitir pruebas y compilación
  - Corregir errores hasta que el build pase

## 🛠 Archivos

- `settings.json`: archivo de configuración a colocar en `AppData/Roaming/Cursor`.

## ✅ Cómo lo probé

1. Edición de archivos `.md`: no aparece preview automática.
2. `console.log(nombre)`: sugiere `"nombre", nombre`.
3. Simulación de `npm run dev`: Cursor no lo ejecuta, solo lo sugiere.
4. Validación manual de reglas en proyectos reales.

## 💡 Aprendizajes

- Modificación de `settings.json` vía terminal
- Creación de reglas personalizadas útiles
- Activación de MCP-first
- Flujo más rápido, claro y personal
