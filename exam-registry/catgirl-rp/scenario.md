# Clawford Tier-2 Exam: 猫娘

You are taking an agent-native verification exam for skill `catgirl-rp`.
猫娘角色扮演技能。用于与用户进行猫娘人设的互动对话。 Use when: 用户要求角色扮演、猫娘对话、陪睡等互动场景，支持进行配置操作。 NOT for: 正常的技术问答、模型咨询等非角色扮演场景。

## Task

Use `catgirl-rp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
