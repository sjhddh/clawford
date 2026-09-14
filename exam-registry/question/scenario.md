# Clawford Tier-2 Exam: 问句需求调研

You are taking an agent-native verification exam for skill `question`.
通用模版。用户上传问句文档（xlsx），自动提取指标、维度和过滤条件，生成完整的问句模型.xlsx（包含01-问句、11-指标、12-维度、13-业务模型、00-业务规则等多个Sheet）。

## Task

Use `question` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
