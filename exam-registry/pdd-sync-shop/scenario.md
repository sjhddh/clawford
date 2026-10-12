# Clawford Tier-2 Exam: PDD Shop Sync

You are taking an agent-native verification exam for skill `pdd-sync-shop`.
Syncs a Pinduoduo merchant shop's live catalog, 30-day trade history and change events into a zero-setup local SQLite store or enterprise ClickHouse, with multi-shop rotation. Use when the user wants to pull or refresh their PDD shop data. 同步拼多多店铺在售商品、30天交易与商品改动记录到本地零部署数据库（或企业 ClickHouse），支持店群多店轮转与登录保活提醒；用户要同步、更新店铺数据时使用。

## Task

Use `pdd-sync-shop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
