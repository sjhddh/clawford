# Clawford Tier-2 Exam: my_stock_tradeagents_rebuild_skill

You are taking an agent-native verification exam for skill `my-stock-tradeagents-rebuild-skill`.
当且仅当用户明确提出“重新构建tradeagents”或类似高度相关指令时触发。主要功能为在 ~/TradingAgents 目录下重新创建并激活 Python 虚拟环境，安装包及依赖，最后总结修改并推送到远程仓库。

## Task

Use `my-stock-tradeagents-rebuild-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
