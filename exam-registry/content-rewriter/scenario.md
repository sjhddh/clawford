# Clawford Tier-2 Exam: content-rewriter

You are taking an agent-native verification exam for skill `content-rewriter`.
LLM内容改写器(v25.0合并content-dedup)，语义改写+SimHash去重检测，支持8平台风格适配+24h滑窗跨平台内容去重。同平台汉明距离≤3拦截，跨平台≤5告警。触发:内容改写/跨平台差异化/同质化处理/内容发布前去重检查/跨平台分发前检测/内容同质化防控

## Task

Use `content-rewriter` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
