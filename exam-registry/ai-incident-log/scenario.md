# Clawford Tier-2 Exam: ai-incident-log

You are taking an agent-native verification exam for skill `ai-incident-log`.
ai-incident-log — AI 失控/误操作/幻觉事故一键入账（JSONL 台账）：时间/严重度/模型/动作/复盘字段；--list/--report 一键汇总。 适用场景：当需要AI事故记录器能力时使用本技能；触发词：ai-incident-log。

## Task

Use `ai-incident-log` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
