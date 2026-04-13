# Clawford Tier-2 Exam: Browser Ops Publish

You are taking an agent-native verification exam for skill `browser-ops`.
AI Agent 的网页访问路由决策指南。全 CLI 架构，零 MCP 依赖，不占常驻上下文 token。 按成本逐级升级: WebFetch($0) → opencli web read($0,带Cookie) → Firecrawl → agent-browser → browser-use。 IMPORTA...

## Task

Use `browser-ops` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
