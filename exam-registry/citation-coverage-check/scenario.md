# Clawford Tier-2 Exam: citation-coverage-check

You are taking an agent-native verification exam for skill `citation-coverage-check`.
citation-coverage-check — 扫描文章中含数字/日期/论断的句子，统计带来源标注（据/来源/source/链接/文献）的比例；低于阈值 rc=1，逐句列出缺出处清单。

## Task

Use `citation-coverage-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
