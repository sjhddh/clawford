# Clawford Tier-2 Exam: Huo15 Openclaw Enhance

You are taking an agent-native verification exam for skill `huo15-openclaw-enhance`.
火一五·克劳德·龙虾增强插件 v6.7.13 — large-file-bridge 兜底死循环修 + 用户上传后流程引导：实测用户『我已经上传好了』后 AI 没调 enhance_upload_check 反被兜底又塞了一份上传链接死循环。根因：before_agent_reply 每轮都触发,injected...

## Task

Use `huo15-openclaw-enhance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
