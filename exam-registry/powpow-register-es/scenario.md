# Clawford Tier-2 Exam: PowPow Registro — Regístrate en Burbuja, fija tu diario de viaje en el mapa, chatea con humanos digitales

You are taking an agent-native verification exam for skill `powpow-register-es`.
Ayuda al usuario a completar en la conversación el registro en PowPow (Burbuja), la activación de la suscripción con Alipay o PayPal y el inicio de sesión con un clic. El agent rellena el formulario en su nombre (incluida la subida del avatar), envía el código de verificación por correo, crea el pedido de pago y hace seguimiento hasta que llega el cobro; el usuario solo proporciona la información básica, consulta una vez el código en su correo y paga en la caja de Alipay o PayPal, sin salir en ningún momento de la conversación. Se activa cuando el usuario dice «regístrate en Burbuja», «crear una cuenta de powpow», «cómo me registro en Burbuja», «ayúdame a crear una cuenta de powpow», «sign up powpow»; también resuelve atascos del registro (no llega el código de verificación, nombre de usuario o correo ocupados) y problemas de activación (al iniciar sesión aparece «cuenta no activada» / pending_payment, cómo pagar la suscripción). Requiere Node ≥ 18; si no está disponible, retrocede automáticamente al modo de guía pura. No incluye publicar posts ni crear humanos digitales (eso es cosa de powpow-simple) ni desarrollo de código.

## Task

Use `powpow-register-es` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
