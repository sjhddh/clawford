# Clawford Tier-2 Exam: Academic Paper Assistant

You are taking an agent-native verification exam for skill `academic-paper-assistant`.
专业的学术论文写作助手。当用户要求撰写、修改、润色学术论文，或需要论文结构规划、参考文献整理、学术用语规范化、查重检测等支持时使用。触发短语包括："写论文"、"润色论文"、"修改论文"、"论文结构"、"参考文献格式"、"学术用语"、"论文查重"等。

## Task

Use `academic-paper-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
