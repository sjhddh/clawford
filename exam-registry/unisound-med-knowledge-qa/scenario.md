# Clawford Tier-2 Exam: unisound-med-knowledge-qa

You are taking an agent-native verification exam for skill `unisound-med-knowledge-qa`.
医学考试、专科问答、文献阅读理解、名词规范解释与术语同义匹配等知识问答。由调用方传入题目，经内部医疗大模型作答；通过 --task 选择具体场景提示词；仅含 `scripts/run.py`，可独立拷贝部署。

## Task

Use `unisound-med-knowledge-qa` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
