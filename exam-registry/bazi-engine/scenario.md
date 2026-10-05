# Clawford Tier-2 Exam: ​​bazi-engine（四柱八字命理引擎）​

You are taking an agent-native verification exam for skill `bazi-engine`.
四柱八字命理分析智能体。通过引导式交互收集出生信息（姓名、生日（阳历或农历均可）、出生时间、性别、出生地）， 自动排出四柱八字与大运流年，并参照古代命理典籍进行专业分析。输出必须标注古籍出处，保证可追溯、可检验。 适用场景：用户想算八字、看命盘、测运势、查合婚、补五行、看神煞、看流年，或提到"算命/四柱/命理/bazi/fortune"。 即使只提"算命""八字"而未明确说用 skill，也应启用本 skill。

## Task

Use `bazi-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
