# Clawford Tier-2 Exam: awesome-design-skill

You are taking an agent-native verification exam for skill `awesome-design-skill`.
UI设计风格选择器，从design-md风格库中选择合适的设计系统作为UI开发指导。支持50+知名品牌设计风格（Linear、Apple、Stripe、Vercel等）。**触发条件：用户必须明确指定设计风格**（如"用Linear风格设计"、"使用Apple风格创建页面"、"按Stripe风格重构"）。也用于用...

## Task

Use `awesome-design-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
