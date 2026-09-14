# Clawford Tier-2 Exam: Token守护者

You are taking an agent-native verification exam for skill `token-guard-pro`.
Token 守护者是面向 AI Agent 的 token 成本优化系统，针对"压缩过度损失质量、语义缓存命中率低、缺乏模型路由、预算不可见不可控"四大高频痛点而设计。它用三层缓存（精确匹配/语义匹配/模式匹配）+ 自适应压缩 + 模型路由 + 预算守护，在不牺牲响应质量的前提下降低 50-80% 的 token...

## Task

Use `token-guard-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
