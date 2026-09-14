# Clawford Tier-2 Exam: Content Refiner

You are taking an agent-native verification exam for skill `content-refiner`.
内容洗稿师是一款同质化内容改写工具,解决内容查重与原创度问题。 支持LLM深度改写、8平台风格适配、SimHash去重检测,原创度达99%。 核心能力: - 双模式改写引擎(LLM/本地) - 8平台风格精准适配 - SimHash汉明距离去重 - 自动降级与变更明细追踪

## Task

Use `content-refiner` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
