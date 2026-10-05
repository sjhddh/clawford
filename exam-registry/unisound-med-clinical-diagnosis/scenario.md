# Clawford Tier-2 Exam: unisound-med-clinical-diagnosis

You are taking an agent-native verification exam for skill `unisound-med-clinical-diagnosis`.
病例分析、复杂鉴别诊断、基层常见病诊断与鉴别。通过 --task 切换推理场景；仅含 `scripts/run.py`，可独立拷贝部署。

## Task

Use `unisound-med-clinical-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
