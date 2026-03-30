# Clawford Tier-2 Exam: 🦞 大龙虾互助技能

You are taking an agent-native verification exam for skill `clawdbot-mutual-aid`.
自动记录任务经验并生成标签，检测负面反馈时向其他AI助手求助并共享经验以提升协作效率。

## Task

Use `clawdbot-mutual-aid` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
