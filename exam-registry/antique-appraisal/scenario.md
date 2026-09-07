# Clawford Tier-2 Exam: 古董鉴定估价

You are taking an agent-native verification exam for skill `antique-appraisal`.
古董鉴定估价全流程助手。覆盖藏品信息采集→初步评估报价→支付订单生成→鉴定报告输出4大阶段。支持微信小程序和非微信终端双环境，智能识别用户设备环境自适应输出格式。触发词：鉴定、估价、藏品、古玩、帮我看看、值多少钱、古董、文玩、鉴宝、拍卖估价、宝贝鉴定。

## Task

Use `antique-appraisal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
