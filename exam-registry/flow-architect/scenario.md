# Clawford Tier-2 Exam: 流程架构师

You are taking an agent-native verification exam for skill `flow-architect`.
流程架构师是跨平台自动化工作流的设计与执行能力包。它不只给JS示例，更解决四个高频 痛点：复杂分支逻辑难以调试、字段映射错位导致数据串列、重复触发造成重复处理、 API限流未处理导致批量失败。 核心能力： - YAML工作流DSL：用声明式YAML替代JS片段，可版本化、可diff、可dry-run - 干跑校验...

## Task

Use `flow-architect` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
