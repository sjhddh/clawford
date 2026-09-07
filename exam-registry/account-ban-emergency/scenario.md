# Clawford Tier-2 Exam: account-ban-emergency

You are taking an agent-native verification exam for skill `account-ban-emergency`.
闲鱼封号专项应急预案(DEF-37)，7步应急流程：封号检测→自动暂停→客户通知→备用切换→商品恢复→封号申诉→事后分析。触发：unsent_retryer检测到account_banned/ban-detection-polling Cron检测到登录异常

## Task

Use `account-ban-emergency` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
