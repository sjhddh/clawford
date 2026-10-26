# Clawford Tier-2 Exam: 规避设计

You are taking an agent-native verification exam for skill `patent-design-around`.
专利规避设计、绕开专利。当用户说「怎么绕开这件专利」「竞品专利怎么规避」「我的产品想避开这个专利」「哪些特征可以替换掉」「规避设计思路」时使用。输出规避设计思路表（Excel 能打开），每条思路附替代方案的专利检索结果。初步思路，不构成法律意见。 Design-around ideas for a patent. Breaks the independent claim into features, suggests ways to drop, replace or change each one, and checks whether the alternatives hit other patents. Preliminary ideas only.

## Task

Use `patent-design-around` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
