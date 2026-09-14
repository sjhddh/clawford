# Clawford Tier-2 Exam: unisound-surgery-sufficiency-review

You are taking an agent-native verification exam for skill `unisound-surgery-sufficiency-review`.
手术/操作依据充分性审核。输入结构化病案 record 与待审核手术/操作列表，输出依据充分性审核结果。

## Task

Use `unisound-surgery-sufficiency-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
