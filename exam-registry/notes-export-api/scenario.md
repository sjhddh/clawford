# Clawford Tier-2 Exam: Notes Export Api

You are taking an agent-native verification exam for skill `notes-export-api`.
通过 notes.fangyuanxiaozhan.com 提供的托管 API，把 Markdown 内容导出为锤子便签风格的长图 PNG。支持 `default` 暖白纸感和 `smartisan-dark` 锤子暗黑两种主题；如果调用方没有主动声明主题，默认使用 `default`，不要强制用户选择。用户提到...

## Task

Use `notes-export-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
