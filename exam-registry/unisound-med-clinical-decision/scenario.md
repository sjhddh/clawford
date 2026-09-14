# Clawford Tier-2 Exam: unisound-med-clinical-decision

You are taking an agent-native verification exam for skill `unisound-med-clinical-decision`.
专病诊疗、基层处置、全科辅助、结局分析、病情分析与慢病管理。通过 --task 选择场景；仅含 `scripts/run.py`，可独立拷贝部署。

## Task

Use `unisound-med-clinical-decision` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
