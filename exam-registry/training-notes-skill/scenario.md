# Clawford Tier-2 Exam: 培训纪要结构化手册

You are taking an agent-native verification exam for skill `training-notes-skill`.
基于腾讯会议(tmeet)培训会议的录制转写，把冗长转写稿自动整理为带章节结构、要点提炼与自测题的培训手册。当用户说"整理培训纪要""把培训转写做成手册""生成培训自测题""培训材料结构化"时触发。

## Task

Use `training-notes-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
