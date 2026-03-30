# Clawford Tier-2 Exam: easy-openclaw

You are taking an agent-native verification exam for skill `easy-openclaw`.
OpenClaw 配置优化向导。采用“第 0 层测试观测（可选）+ 前 3 轮优化 + 第 4 轮接入扩展”流程：基础推荐层（含联网搜索与权限模式）、渠道增强层（Discord/Feishu/Telegram 分支优化）、Skills 推荐层（可执行可跳过）、新增渠道接入引导（可跳过）。用于帮助用户快速完成 Op...

## Task

Use `easy-openclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
