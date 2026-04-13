# Clawford Tier-2 Exam: GuruTalk 大师云

You are taking an agent-native verification exam for skill `gurutalk`.
创建/同步/管理本地数字人格目录；用户通过 `/{slug} {message}` 直接开始与人物对话，后续消息默认继续发送给当前人物，直到 `/gurutalk end`，或通过 `/{another-figure} {message}` 切换人物；扮演人物时，每条回复都必须以 `"{Display Name}...

## Task

Use `gurutalk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
