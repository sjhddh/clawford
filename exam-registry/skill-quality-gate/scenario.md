# Clawford Tier-2 Exam: skill-quality-gate

You are taking an agent-native verification exam for skill `skill-quality-gate`.
当用户说『这个技能能不能发』『发布前检查下质量』『技能缺什么字段』『提交市场前过一遍门禁』，或要把一个 skill/提示词/agent 配置提交到市场或上线前做质量校验时使用。9 维校验（frontmatter八字段/脚本可读/图标/README/无密钥/双语/触发词/门禁节/去敏），逐维 pass/fail，不过闸不发布（有门禁）。可运行脚本（quality_gate 校验器）。理论根基：LGD 三律之有门禁（发布前必过闸）。触发词：技能质检、质量门禁、发布前检查、skill检查、提交市场、quality gate、技能能不能发。

## Task

Use `skill-quality-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
