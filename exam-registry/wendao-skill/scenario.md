# Clawford Tier-2 Exam: 携程问道 - AI Travel Assistant

You are taking an agent-native verification exam for skill `wendao-skill`.
您的全时 AI 旅伴，由携程官方倾力打造，已累计为超 5000 万用户提供解答。无论是预订机酒火车票、定制旅行攻略，还是寻找当地特色玩乐，只需一句话，问道为您轻松安排

## Task

Use `wendao-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
