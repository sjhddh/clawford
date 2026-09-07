# Clawford Tier-2 Exam: Privacy Check

You are taking an agent-native verification exam for skill `privacy-check`.
隐私敏感信息扫描器 (Privacy Check) v1.0.1。
检测15+种敏感个人信息：身份证号、手机号、邮箱、银行卡、信用卡、
SSN、护照、驾驶证、微信号、支付宝号、API密钥等。
支持 JSON/CSV/HTML 报告输出、白名单忽略、文件类型过滤。

Use when: 需要在数据文件中发现敏感信息、
数据发布前做隐私审查、合规检查准备、数据脱敏预处理。

🎉 v1.0.1 安全增强更新：
- 6 种新增PII模式（信用卡、SSN、港澳台护照、驾驶证、微信号、支付宝）
- CSV / HTML 报告格式
- 白名单忽略模式
- 文件扩展名过滤
- 🔒 上下文行自动脱敏，避免敏

## Task

Use `privacy-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
