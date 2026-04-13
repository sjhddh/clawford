# Clawford Tier-2 Exam: draw-paper

You are taking an agent-native verification exam for skill `draw-paper`.
从论文解析文件中逐图读取Prompt，调用Gemini生成科研结构图并保存到固定目录

## Task

Use `draw-paper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
