# Clawford Tier-2 Exam: Dream Journal

You are taking an agent-native verification exam for skill `oc-dream-journal`.
梦境记录、学习与分析工具。当用户提及梦境相关内容时，自动提取并学习新的梦境意象，进行文学化修饰后按日期记录。支持意象库自动扩充、关键词搜索、统计分析。从零开始，越用越懂你的梦。

## Task

Use `oc-dream-journal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
