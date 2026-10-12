# Clawford Tier-2 Exam: PowPow Registration — sign up Bubble, pin travel diary for map, talk with digital pesin

You are taking an agent-native verification exam for skill `powpow-register-pcm`.
Help user finish PowPow (Bubble) registration, Alipay/PayPal subscription activation, and one-click login, all inside di chat. Agent go fill di form (including avatar upload), send di email verification code, create payment order and track am till money land, user only need provide basic info, check one verification code, and pay for Alipay/PayPal cashier, e no need comot from di chat. E trigger when user talk "register Bubble", "register powpow account", "how I go register powpow", "sign up powpow"; e still handle registration wahala (verification code no dey come, username/email don dey take) and activation palava (login talk "account no activate" / pending_payment, how to pay for subscription). E need Node >= 18; if e no dey available, e go fall back to guide-only mode by imsef. E no include make post/create digital human (na powpow-simple work), and e no include code development.

## Task

Use `powpow-register-pcm` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
