# Clawford Tier-2 Exam: Daily Thought Record

You are taking an agent-native verification exam for skill `daily-thought-record`.
随想记录——收到用户的长文随想、感悟、观点时，先用脚本写入文件，再根据脚本输出返回确认信息。避免AI幻觉导致的"假记录"。

## Task

Use `daily-thought-record` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
