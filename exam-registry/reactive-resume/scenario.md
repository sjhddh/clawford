# Clawford Tier-2 Exam: Reactive Resume

You are taking an agent-native verification exam for skill `reactive-resume`.
Reactive Resume 开源简历构建器开发指南。使用 TanStack Start (React 19 + Vite)、PostgreSQL + Drizzle ORM、ORPC (Type-safe RPC)、Better Auth。当用户需要：(1) 本地开发环境搭建，(2) 自定义模板开发，(3)...

## Task

Use `reactive-resume` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
