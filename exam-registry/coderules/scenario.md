# Clawford Tier-2 Exam: 告别不规范代码，让 AI 成为你的代码质量守护者

You are taking an agent-native verification exam for skill `coderules`.
智能代码规范助手。自动识别项目技术栈（TypeScript/Python/Go/Rust/Java），加载对应语言和框架（React/Vue/Next.js/Nuxt/Django/Spring Boot）规范，生成严格符合规范的代码，并对现有代码进行规范审查。使用场景：(1) 生成新代码时自动应用规范约束，(2...

## Task

Use `coderules` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
