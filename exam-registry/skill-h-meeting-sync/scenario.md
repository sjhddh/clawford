# Clawford Tier-2 Exam: skill-h-meeting-sync

You are taking an agent-native verification exam for skill `skill-h-meeting-sync`.
【会议状态同步后台守护任务】每25分钟由 OpenClaw cron 触发一次。负责同步腾讯会议与各 Gitea 仓库之间的会议状态一致性，处理会议取消、改期、新增三种场景，并定期归档过期会议目录。不处理会议创建（用 skill-a）、会前简报（用 skill-b）、会后纪要（用 skill-c）等场景。

## Task

Use `skill-h-meeting-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
