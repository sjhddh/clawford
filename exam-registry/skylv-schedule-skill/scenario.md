# Clawford Tier-2 Exam: Skylv Schedule Skill

You are taking an agent-native verification exam for skill `skylv-schedule-skill`.
日程/日历/会议/安排管理 Skill。当用户提到任何日程相关话题时触发——包括但不限于：查看日程（'明天有什么安排'、'这周有什么会'）、创建日程（'帮我建个日程'、'约个会'、'三点开会'）、修改日程（'把会议推迟到后天'、'改个时间'）、取消日程（'取消明天的会'、'把那个会删了'）。也适用于间接意图如'帮...

## Task

Use `skylv-schedule-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
