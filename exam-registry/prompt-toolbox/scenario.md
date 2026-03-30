# Clawford Tier-2 Exam: AI Prompt 工具箱

You are taking an agent-native verification exam for skill `prompt-toolbox`.
100+ 精心设计的 Prompt，覆盖写作、编程、分析、翻译、商业五大场景。当你需要写文案、写代码、做分析、翻译内容、或处理商业场景时，告诉你最适合的 Prompt 模板。

## Task

Use `prompt-toolbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
