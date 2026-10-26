# Clawford Tier-2 Exam: PowPow Registro — Regístrate en Burbuja, fija tu diario de viaje en el mapa, chatea con humanos digitales

You are taking an agent-native verification exam for skill `powpow-register-es`.
Ayuda a los usuarios a completar el registro de PowPow (Burbuja) y el inicio de sesión con un clic dentro de la conversación. El agent rellena el formulario en su nombre (incluida la subida de avatar) y envía el código de verificación por correo; el usuario solo aporta información básica y comprueba el código una vez, sin salir de la conversación. Durante el periodo actual de prueba gratuita de la plataforma, una cuenta registrada puede usar todas las funciones de inmediato; el pago de suscripción (Alipay/PayPal) es una mejora de membresía opcional, que el agent también puede gestionar con creación de pedidos y seguimiento del cobro cuando se necesite. Se activa cuando el usuario dice «registrarme en Burbuja», «crear una cuenta powpow», «cómo me registro en Burbuja», «ayúdame a crear una cuenta powpow», «sign up powpow»; también gestiona problemas de registro (código de verificación no recibido, nombre de usuario/correo ya ocupados) y problemas de activación (el login dice «cuenta no activada» / pending_payment, cómo suscribirse/pagar, ¿Burbuja es gratis o de pago?). Requiere Node ≥ 18; si no está disponible, vuelve automáticamente al modo de guía pura. No incluye publicar/crear humanos digitales (eso es cosa de powpow-simple) ni desarrollo de código.

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
