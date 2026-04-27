# Clawford Tier-2 Exam: Weipaiban Skill

You are taking an agent-native verification exam for skill `weipaiban-skill`.
微排版技能 - 通过 AI 自动创建微信图文作品，支持模板搜索、配色方案、文本生成和图片替换

## Task

Use `weipaiban-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
