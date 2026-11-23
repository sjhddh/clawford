# Clawford Tier-2 Exam: Max Cli

You are taking an agent-native verification exam for skill `wirecat-max`.
Читать и отправлять сообщения в личном аккаунте MAX Messenger владельца и от имени его ботов через команду `max`. Использовать, когда просят установить или подключить MAX, найти чат, прочитать переписку или непрочитанное, найти сообщение, договорённость или документ, ответить на вопрос по переписке в MAX, разобрать «кто кому должен», показать вложение или голосовое, отправить сообщение в MAX или написать от имени бота.

## Task

Use `wirecat-max` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
