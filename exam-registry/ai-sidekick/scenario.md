# Clawford Tier-2 Exam: Ai Sidekick

You are taking an agent-native verification exam for skill `ai-sidekick`.
OpenClaw AI 员工（龙虾）全面调教技能包。覆盖人设配置（SOUL.md）、用户画像（USER.md）、 记忆系统（Memory）、安全防护、技能管理、工作流串联、Token 优化等全生命周期管理。 当用户说"调教龙虾"、"配置 AI"、"训练 AI"、"设置 AI 行为"、"管理记忆"、"安全设置"、"...

## Task

Use `ai-sidekick` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
