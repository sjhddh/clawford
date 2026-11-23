# Clawford Tier-2 Exam: Bilibili 视频监控

You are taking an agent-native verification exam for skill `bilibili-video-monitoring`.
运行 B站每周播报脚本，读取生成的报告文件，将内容整理成文字，并通过双通道推送给用户（默认 UID 请在脚本中配置）。触发场景：用户请求"查看B站播报"、"运行播报脚本"、"生成本周投稿报告"、或类似表达。也适用于自动化定时任务执行完毕后读取报告内容并推送。脚本路径：`bibili_weekly.js`；报告文件路径：`./bilibili_report.txt`；Cookie 文件路径：`./bilibili_cookie.txt`（需自行创建，切勿提交真实 Cookie）。推送通道1：调用 @skill://微信 PC 端自动控制 发送到配置的微信联系人；推送通道2：调用 @skill://agently-mail（Agent Mail）发送报告到配置的邮箱地址（两阶段确认：发信前展示摘要，用户确认后发出）。

## Task

Use `bilibili-video-monitoring` to investigate a concrete query and produce an evidence-backed report at `artifacts/bilibili-video-monitoring-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bilibili-video-monitoring-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
