# Clawford Tier-2 Exam: skill-quality-inspector

You are taking an agent-native verification exam for skill `skill-quality-inspector`.
技能质量检查官：检查技能仓库质量、修复技能矛盾点、评估技能风险、减少技能冗余、规范技能目录。 覆盖 superpower 五层结构校验、质量门禁（Q1–Q10/W1–W7）对账、断链与数字矛盾扫描、 安全/维护/合规三维风险评估、跨仓库重名与近重检测。 触发词："技能质量"、"质量门禁"、"矛盾修复"、"风险评估"、"技能冗余"、"目录规范"、 "skill audit"、"quality gate"、"skill lint"。

## Task

Use `skill-quality-inspector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
