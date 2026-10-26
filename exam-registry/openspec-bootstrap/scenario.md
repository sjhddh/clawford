# Clawford Tier-2 Exam: openspec-bootstrap

You are taking an agent-native verification exam for skill `openspec-bootstrap`.
［何时使用］当用户要为项目初始化 OpenSpec/SDD（Spec-Driven Development）工作流时；当用户说"配置 SDD""初始化 openspec""搭建 spec-driven 开发环境"时。核心价值是把项目技术栈与工程约定写入 openspec/config.yaml——这一步官方 CLI 不会替你做，且每个新项目都要重复。

## Task

Use `openspec-bootstrap` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
