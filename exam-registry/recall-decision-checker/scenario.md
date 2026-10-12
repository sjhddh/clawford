# Clawford Tier-2 Exam: recall-decision-checker

You are taking an agent-native verification exam for skill `recall-decision-checker`.
医疗器械召回级别判定器——基于官方规则源的零依赖决策支持工具，JSON IR 输出，覆盖TH-MED-003域（医疗器械全链路）。

## Task

Use `recall-decision-checker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
