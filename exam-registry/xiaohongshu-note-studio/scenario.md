# Clawford Tier-2 Exam: 小红书笔记工作室

You are taking an agent-native verification exam for skill `xiaohongshu-note-studio`.
小红书图文笔记创作与发布前体检：从选题、10条标题、封面大字、正文、标签到违禁词与限流风险自检，输出可直接发布的笔记包。用户提到小红书笔记、爆款标题、种草文案、封面字、标签、笔记限流、小红书运营时使用。

## Task

Use `xiaohongshu-note-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
