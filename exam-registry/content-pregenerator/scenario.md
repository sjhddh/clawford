# Clawford Tier-2 Exam: content-pregenerator

You are taking an agent-native verification exam for skill `content-pregenerator`.
内容预生成器,凌晨低谷期(01:00-05:00)为所有租户预生成当天内容,复用content-orchestrator的15条管道执行'生成+质检'(跳过发布),结果缓存到PG content_pre_cache表,发布时直接取已生成内容实现秒级发布。DRR三阶段公平调度确保多租户Jain≥0.8。分层降级:PL-VIDEO→PL-IMAGE→TEXT→E0兜底。触发:预生成/内容预生成/凌晨生成/批量生成内容/pregenerate 不触发:实时发布/内容生成/单条生成/客服回复/数据分析

## Task

Use `content-pregenerator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
