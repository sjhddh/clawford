# Clawford Tier-2 Exam: Clawhub Ops

You are taking an agent-native verification exam for skill `clawhub-ops`.
ClawHub Skill 发版、账号管理、SEO 优化、数据查询的完整操作手册。当需要发布新 Skill、切换账号、查询 downloads 数据、排查发版归属问题、验证 IP 代理时使用。包含 5 个账号的 token/IP 对照、双 config 路径陷阱、已知 CLI Bug、速率限制规则。

## Task

Use `clawhub-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
