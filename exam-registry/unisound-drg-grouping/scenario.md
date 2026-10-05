# Clawford Tier-2 Exam: unisound-drg-grouping

You are taking an agent-native verification exam for skill `unisound-drg-grouping`.
医生端 ICD/DRG — 据出院文书与 DRG 候选项，由内部医疗大模型单选最可能入组；仅含 scripts/run.py，无 _shared 依赖。

## Task

Use `unisound-drg-grouping` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
