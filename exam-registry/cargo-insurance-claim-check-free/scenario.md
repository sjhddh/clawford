# Clawford Tier-2 Exam: 货运险投保与货损理赔核对（免费版）

You are taking an agent-native verification exam for skill `cargo-insurance-claim-check-free`.
货运险投保与货损理赔台账逐票复算（保费=投保金额×费率、应赔金额=定损金额−免赔额、理赔差额=应赔−实收、投保比例=投保金额÷货值，外加同一保单号重复、关键字段空缺与金额负值、合计行复核），每条结论引用原文行号。本免费版执行引擎自己声明的免费检查项。触发词包括 货运险核对、货运险台账、货损理赔、理赔差额对不上、投保比例不对、保费算错。

## Task

Use `cargo-insurance-claim-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
