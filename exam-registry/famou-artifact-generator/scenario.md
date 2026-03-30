# Clawford Tier-2 Exam: 伐谋 - 任务定义与评估器生成

You are taking an agent-native verification exam for skill `famou-artifact-generator`.
交互式引导用户完成 FaMou 进化任务的完整流程：先通过结构化澄清循环产出 `problem.md`，再实现并验证 FaMou 实验的三个输入物料（`init.py`、`evaluator.py`、`prompt.md`）。当用户提到以下任意情形时触发：定义/澄清/创建 FaMou 任务、帮我写 problem...

## Task

Use `famou-artifact-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
