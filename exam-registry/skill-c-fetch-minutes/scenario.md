# Clawford Tier-2 Exam: skill-c-fetch-minutes

You are taking an agent-native verification exam for skill `skill-c-fetch-minutes`.
【会后纪要抓取与issue草稿生成】每10分钟由 OpenClaw cron 触发一次。负责在会议结束后从腾讯会议拉取转录与AI智能纪要，由 OpenClaw 做两阶段issue抽取，生成 draft_issue.md 等四个文件并提交到 Gitea，最后通知组织者审核。不处理会议创建、会前简报、issue落地等场景。

## Task

Use `skill-c-fetch-minutes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
