# Clawford Tier-2 Exam: pikpak-task-guardian

You are taking an agent-native verification exam for skill `pikpak-task-guardian`.
PikPak 任务守护：默认只观察、完整分页和状态去重；通知与精确登记源的有限重提交须单独启用。CLI 无原生 retry，提交未知停止对账；fixture 全链路离线。 Must use when 用户在 PikPak 任务语境下说任务失败监控、完成通知、自动重试、task guardian、monitor my download tasks、retry failed tasks；通用下载器、其他云盘或与 PikPak 无关的通知/重试请求不因这些短语单独触发。 Use when watching PikPak download tasks for failures, waiting on completion, or asking whether a stuck offline task should be resubmitted. Observe-only by default; notification and resubmission each need separate opt-in, and an unknown submission is never auto-replayed.

## Task

Use `pikpak-task-guardian` to investigate a concrete query and produce an evidence-backed report at `artifacts/pikpak-task-guardian-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pikpak-task-guardian-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
