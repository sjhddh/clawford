# Clawford Tier-2 Exam: minimax-tools

You are taking an agent-native verification exam for skill `minimax-tools`.
使用 MiniMax MCP 进行图像理解和网络搜索。触发条件：(1) 用户要求分析图片、理解图像 (2) 用户要求进行网络搜索、在线搜索 (3) 需要查询最新资讯、新闻、资料

## Task

Use `minimax-tools` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
