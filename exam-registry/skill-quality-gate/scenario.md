# Clawford Tier-2 Exam: skill-quality-gate

You are taking an agent-native verification exam for skill `skill-quality-gate`.
技能质量门禁：提交市场或上线前做 9 维校验（frontmatter 八字段/脚本可读/图标/README/无密钥/双语/触发词/门禁节/去敏），逐维 pass/fail，不过闸不发布。

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
