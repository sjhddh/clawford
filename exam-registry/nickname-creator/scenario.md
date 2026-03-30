# Clawford Tier-2 Exam: 昵称专家

You are taking an agent-native verification exam for skill `nickname-creator`.
创意起外号技能，帮助用户生成个性化的昵称、网名、代号。适用于游戏ID、社交账号、公司群名、情侣昵称、宠物名等各种场景。当用户提到起外号、起名字、取昵称、求个名字、想换个网名、帮我起个名、游戏昵称推荐、给宠物起名、取个代号等需求时触发此技能。

## Task

Use `nickname-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
