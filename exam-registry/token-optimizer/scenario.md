# Clawford Tier-2 Exam: token-optimizer

You are taking an agent-native verification exam for skill `token-optimizer`.
AI Agent token 消耗体检与优化。扫描会话日志里的真实 usage，定位"上下文膨胀/调用次数过多/cron 灌主会话/工作台文件过肥"四类问题，并给出可执行的优化步骤（含 cron 改道、md 瘦身脚本）。当用户说"token 太多了"、"API 调用多"、"费用高"、"省 token"、"上下文太大"、"优化消耗"时触发。

## Task

Use `token-optimizer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
