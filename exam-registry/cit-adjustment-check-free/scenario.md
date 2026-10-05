# Clawford Tier-2 Exam: 企业所得税纳税调整核对（免费版）

You are taking an agent-native verification exam for skill `cit-adjustment-check-free`.
企业所得税纳税调整表逐项核对（逐行复算、合计勾稽、重复与空缺检测），每条结论引用原文。本免费版执行引擎声明的免费检查项。触发词包括 企业所得税纳税调整核对、企业所得税纳税调整表对不上。本免费版只执行 6 项，即 应纳税所得额复算、调增/调减合计 = 各明细项之和复算、合计行逐列复核等。不执行 5 项判定，例如 业务招待费超限额未足额调增提示。详见 SKILL.md 的「这个免费版不包含」一节。

## Task

Use `cit-adjustment-check-free` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
