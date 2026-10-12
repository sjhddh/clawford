# Clawford Tier-2 Exam: 种草图文笔记创作

You are taking an agent-native verification exam for skill `zhongcao-note-writer`.
This skill helps you write 种草社区 / 图文社区 style notes — hook titles within platform limits, a first-person body with emoji and short lines, hashtag sets mixing broad and niche tags, cover copy, and a closing line that invites comments. Trigger phrases include '种草笔记', '种草文案', '图文笔记', '好物文案', '探店文案'. It avoids overclaiming, medical or absolute-effect wording, and platform-prohibited claims.

## Task

Use `zhongcao-note-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
