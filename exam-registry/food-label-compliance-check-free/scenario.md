# Clawford Tier-2 Exam: 食品标签与配料表合规核对（免费版）

You are taking an agent-native verification exam for skill `food-label-compliance-check-free`.
食品标签与配料表台账逐项核对（配料表顺序、配料与投料记录一致性、致敏物质提示、营养成分表算术与 NRV% 复算、批次重复与同日两个标签版本、字段合法性），每条结论引用原文行号。触发词包括 食品标签与配料表合规核对、配料表与投料记录对不上、致敏物质没提示、营养成分表能量算不对、标签版本重复。

## Task

Use `food-label-compliance-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
