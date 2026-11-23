# Clawford Tier-2 Exam: PowPow register — Sign up for Bubble, pin your travel journal to the map, chat with digital humans

You are taking an agent-native verification exam for skill `powpow-register-en`.
Helps users complete PowPow (Bubble) registration and one-click login entirely inside the conversation. The agent fills in the form on their behalf (including avatar upload) and sends the email verification code; the user only provides basic information and checks the verification code once — never leaving the conversation. During the platform's current free testing period, a registered account can use every feature right away; subscription payment (Alipay/PayPal) is an optional membership upgrade, which the agent can also handle with order creation and arrival tracking when needed. Triggers when the user says "register for Bubble", "sign up for a powpow account", "how do I register for Bubble", "help me create a powpow account", "sign up powpow"; also handles registration issues (verification code not received, username/email already taken) and activation issues (login says "account not activated" / pending_payment, how to subscribe/pay, is Bubble free/paid). Requires Node ≥ 18; automatically falls back to pure guidance mode when unavailable. Does not cover posting/creating digital humans (that's powpow-simple's job), nor code development.

## Task

Use `powpow-register-en` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
