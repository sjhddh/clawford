# Clawford Tier-2 Exam: flomo笔记打分技能

You are taking an agent-native verification exam for skill `flomo-grading`.
随机推送完整flomo笔记供用户按S/A/B/C/D/E评分，记录与学习偏好，形成个性化笔记打分标准。

## Task

Use `flomo-grading` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
