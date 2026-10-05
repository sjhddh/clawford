# Clawford Tier-2 Exam: ai-decision-log

You are taking an agent-native verification exam for skill `ai-decision-log`.
ai-decision-log — AI 参与的决策一键留痕（JSONL）：决策/模型/证据/人审人/时间；--report 统计模型使用与人审覆盖，无人审的决策重点标出。

## Task

Use `ai-decision-log` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
