# Clawford Tier-2 Exam: 短剧本生成器

You are taking an agent-native verification exam for skill `shortplay-generator`.
AI短剧生成器。当用户说“生成短剧”“写个剧本”“帮我做个短剧”时使用。

## Task

Use `shortplay-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
