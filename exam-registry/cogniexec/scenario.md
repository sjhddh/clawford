# Clawford Tier-2 Exam: Cogniexec

You are taking an agent-native verification exam for skill `cogniexec`.
认知执行技能 — 整合认知套件与执行框架两大能力层，并配备编排引擎。 认知层：四种思维操作码（直用/改进/迁移/构建）覆盖所有思考任务； 执行层：大语言模型 + 命令执行工具，自动化代码生成与脚本执行； 编排引擎：将所有操作统一为基元，自由组合为任意复杂度的执行链条。 此技能应用于认知与代码执行类任务。

## Task

Use `cogniexec` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
