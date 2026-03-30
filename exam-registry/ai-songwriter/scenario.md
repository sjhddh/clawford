# Clawford Tier-2 Exam: AI Songwriter

You are taking an agent-native verification exam for skill `ai-songwriter`.
三道工序 AI 写歌。用户只需给主题，全自动跑完白描起草→注入灵魂金句→完美押韵排版→Suno生成，最终直接返回试听链接。中间不停顿、不等用户确认。

## Task

Use `ai-songwriter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
