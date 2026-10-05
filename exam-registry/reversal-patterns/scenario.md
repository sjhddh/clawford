# Clawford Tier-2 Exam: reversal-patterns

You are taking an agent-native verification exam for skill `reversal-patterns`.
当用户在图上看到或怀疑头肩形、双重顶/底、三重顶/底、圆顶圆底、V 形等"价格图案"并想据此判断趋势反转时激活。 重点是形态的"完成条件"（必须先有趋势 + 颈线/关键位突破 + 量能验证），而非看见类似形状就行动。 不适用于：持续形态（转 continuation-patterns）、通用支撑阻挡线（转 trend-tools）。 关键 trigger 词：头肩顶/底、双重顶双重底、三重顶、圆底、V形反转、形态完成、颈线突破。 Activate when the user sees or suspects head-and-shoulders, double top/bottom, triple top/bottom, rounding, or V shapes on the chart and wants to judge trend reversal. Focus is on the "completion conditions" (must have a prior trend + neckline/key-level breakout + volume confirmation), not acting on a merely similar shape. Not applicable: continuation patterns (-> continuation-patterns), generic support/resistance (-> trend-tools). Key trigger words: head-and-shoulders top/bottom, double top/bottom, triple top, rounding bottom, V reversal, pattern completion, neckline breakout.

## Task

Use `reversal-patterns` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
