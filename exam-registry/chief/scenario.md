# Clawford Tier-2 Exam: Chief

You are taking an agent-native verification exam for skill `chief`.
谛听 — HR 深度组织诊断系统，基于麦肯锡七步法+苏格拉底审计+冰山模型。Use when user asks to 深度分析问题、团队诊断、根因分析、组织诊断、干部评估、文化诊断、离职分析、薪酬对标、变革准备度评估、人才盘点。不适用于简单问答、政策查询、模板生成、邮件起草等日常 HR 事务。

## Task

Use `chief` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
