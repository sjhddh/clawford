# Clawford Tier-2 Exam: historias-a-imagenes-nanobanana

You are taking an agent-native verification exam for skill `historias-a-imagenes-nanobanana`.
Skill que convierte un guion de secuencia de historias (output de guionizacion-historias-formula100k) en imágenes terminadas listas para subir a Instagram Stories. Activar SIEMPRE que el usuario o un usuario pida: "renderiza este guion de historias", "convierte este guion en imágenes", "diséñame las stories de [archivo]", "pasa este guion a imágenes con nanobanana", "genera las historias diseñadas", "exporta este guion a PNG", "haz las imágenes de mi secuencia de stories", o cualquier variación que combine un guion de historias con la intención de tener archivos visuales finales. Usa la skill Nano Banana (Gemini) como motor por defecto, con el MCP de Higgsfield como alternativa. Se conecta con una carpeta de fotos de marca personal (la pregunta y guarda como preset) y elige automáticamente la mejor foto base por slide. Imita el estilo nativo de Instagram Stories (fuentes IG, cajas redondeadas, paleta del usuario, capas de capturas/mockups, flechas amarillas, X/✓).

## Task

Use `historias-a-imagenes-nanobanana` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
