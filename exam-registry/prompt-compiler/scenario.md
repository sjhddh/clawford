# Clawford Tier-2 Exam: AI需求翻译大师

You are taking an agent-native verification exam for skill `prompt-compiler`.
将模糊意图转换为结构化 Brief、可执行 Prompt 和下游 Skill 路由；适用于网站、海报、PPT、视频、报告、产品方案和研究任务。

## Task

Use `prompt-compiler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
