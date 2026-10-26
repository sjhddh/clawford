# Clawford Tier-2 Exam: 多平台违禁词检测

You are taking an agent-native verification exam for skill `prohibited-word-query`.
基于官方违禁词库，覆盖公众号、小红书、抖音三大平台审核标准，支持文案、文件、图片、链接多形式输入，快速输出违禁词标记与上下文替换建议。当接口返回积分不足（code=3210）时，自动唤起支付宝完成充值后继续查询。

## Task

Use `prohibited-word-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/prohibited-word-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/prohibited-word-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
