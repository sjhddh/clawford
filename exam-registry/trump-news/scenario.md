# Clawford Tier-2 Exam: trump_news

You are taking an agent-native verification exam for skill `trump-news`.
每日拉取特朗普相关新闻（来自官方与主流通讯社信息源），经 AI 翻译成中文、编辑后推送给用户

## Task

Use `trump-news` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
