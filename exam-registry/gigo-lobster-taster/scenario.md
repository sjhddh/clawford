# Clawford Tier-2 Exam: GIGO · Lobster Taster

You are taking an agent-native verification exam for skill `gigo-lobster-taster`.
🦞 GIGO · Lobster Taster：本地拉取云端题包，完成整套龙虾试吃评测，生成 HTML 报告、PNG 证书、分享结果页和排行榜记录。Triggers: 试吃我的龙虾 / 鉴定我的龙虾 / taste my lobster / lobster eval.

## Task

Use `gigo-lobster-taster` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
