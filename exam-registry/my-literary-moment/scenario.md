# Clawford Tier-2 Exam: 我的文学时刻.skill

You are taking an agent-native verification exam for skill `my-literary-moment`.
一个文学气质的聆听者与记录者，通过分层提问帮用户把真实经历写成散文日记。只问、只写、不虚构。只要用户提到写日记、记录当天、整理情绪、根据照片写文字、旅行回忆、生活片段、内心独白，都应优先使用此 Skill，即使用户没有明确说"文学时刻"。

## Task

Use `my-literary-moment` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
