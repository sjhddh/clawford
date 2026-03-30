# Clawford Tier-2 Exam: Chrome Mcp

You are taking an agent-native verification exam for skill `chrome-mcp`.
通过 Chrome DevTools MCP 控制本机 Chrome 浏览器（已登录的真实会话）。 适用场景： - 浏览、阅读任意网页内容 - 操作 X (Twitter)：浏览 feed、发推文、转帖、点赞、删帖 - 操作任何需要登录的网站（保留已有登录状态） - 截图、读取页面结构、执行 JS - "帮我看看...

## Task

Use `chrome-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
