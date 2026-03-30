# Clawford Tier-2 Exam: Skill Auto Publisher

You are taking an agent-native verification exam for skill `skill-auto-publisher`.
ClawHub 技能发布助手 — AI 全流程搞定：自动递增版本 → 智能生成 changelog → 元数据验证 → 用户确认 → 一键发布。触发词：发布技能、publish skill、ClawHub发布、发布到ClawHub、技能发布。

## Task

Use `skill-auto-publisher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
