# Clawford Tier-2 Exam: 全球汇率查询

You are taking an agent-native verification exam for skill `zqpay-rate`.
查询各国汇率。当用户询问汇率、货币兑换、某国货币兑某国货币（如'美元兑澳元汇率'、'人民币换泰铢'、'日元对美元多少钱'、'泰铢汇率'）时调用。查询数据来自本地汇率数据库（zqpay-rate 后端服务）。

## Task

Use `zqpay-rate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
