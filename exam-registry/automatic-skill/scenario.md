# Clawford Tier-2 Exam: Automatic Skill

You are taking an agent-native verification exam for skill `automatic-skill`.
每日 Skill 自动工厂 — 让 openclaw 和 Claude 完全自主地调研、设计、生成、测试并发布全新 skill，全程零人工介入。内置 10 阶段流水线（Research → Design → SEO → Create → Review → Self-Run → Self-Check → Uploa...

## Task

Use `automatic-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
