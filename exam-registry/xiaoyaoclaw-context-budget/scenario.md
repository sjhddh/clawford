# Clawford Tier-2 Exam: OpenClaw Context Budget

You are taking an agent-native verification exam for skill `xiaoyaoclaw-context-budget`.
OpenClaw context check / context optimization (Context Budget). Core goal = context optimization: reads the models currently enabled in this installation, reads each model's published context window from its vendor's official source, and proposes a window = 60% of the vendor spec. It writes nothing until the user confirms; then it patches only the window field and reports the result. Configuration is read field-by-field: it never loads the whole openclaw.json into context and never reads or echoes channel keys, tokens or provider API keys — only the model/window fields it needs are requested. This skill never runs automatically and creates no scheduled jobs. Use ONLY when the user explicitly asks, with one of these exact intents: 上下文检查 / 上下文优化 / 检查一下模型上下文 / 把上下文窗口配一下 / 设置上下文窗口, or in English: context window check, configure context window, context optimization. Do NOT activate on generic talk about context, memory, prompts, or token usage. 中文：按「厂商标称窗口 × 60%」设置已启用模型的上下文窗口；流程 = 检测（只读）→ 决策（用户回一个数字）→ 执行（确认后写入）。 配置一律**按字段读取**：不把整份 openclaw.json 读进会话，不读取/不回显渠道密钥、令牌、供应商 API key。 不做：maxTokens 等其它参数、压缩阈值（保持系统默认）、未在用模型的默认配置、自动/定时运行、修改历史与审计留痕。

## Task

Use `xiaoyaoclaw-context-budget` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
