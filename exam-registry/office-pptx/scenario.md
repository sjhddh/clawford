# Clawford Tier-2 Exam: PPT演示文稿

You are taking an agent-native verification exam for skill `office-pptx`.
基于原生 officeCLI 引擎驱动，创建、读取、编辑 .pptx/.potx 演示文稿：幻灯片、版式、备注与模板。具有高效、专业的水平，适用于各种 PPT 的制作。

## Task

Use `office-pptx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
