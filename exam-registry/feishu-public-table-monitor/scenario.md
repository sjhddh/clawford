# Clawford Tier-2 Exam: Feishu Public Table Monitor

You are taking an agent-native verification exam for skill `feishu-public-table-monitor`.
监控公开可访问的飞书 Wiki/文档中指定章节下的价格表或模型表，检测版本日期、模型新增/删除、倍率与价格变化，并输出适合 Telegram/Markdown 的变更通知。适用于用户要求监控公开飞书表格、价格表、模型列表、倍率表、产品清单变动并推送提醒的场景。

## Task

Use `feishu-public-table-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/feishu-public-table-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/feishu-public-table-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
