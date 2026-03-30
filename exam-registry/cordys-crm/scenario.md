# Clawford Tier-2 Exam: Cordys CRM

You are taking an agent-native verification exam for skill `cordys-crm`.
Cordys CRM CLI 指令映射技能，本技能用于将自然语言需求精准转换为可执行的 `cordys.sh crm` 标准命令，确保输出稳定、可预测、无歧义。 【核心能力】 - 自动识别用户意图（列表 / 搜索 / 详情 / 跟进 / 原始接口） - 自动识别模块（lead / account / opport...

## Task

Use `cordys-crm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
