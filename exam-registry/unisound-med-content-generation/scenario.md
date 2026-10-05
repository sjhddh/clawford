# Clawford Tier-2 Exam: unisound-med-content-generation

You are taking an agent-native verification exam for skill `unisound-med-content-generation`.
医学科普、文档摘要、术语释义、教学案例与诊疗文书辅助生成。通过 --task 选择类型；仅含 `scripts/run.py`，可独立拷贝部署。

## Task

Use `unisound-med-content-generation` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
