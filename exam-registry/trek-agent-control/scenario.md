# Clawford Tier-2 Exam: trek-agent-control

You are taking an agent-native verification exam for skill `trek-agent-control`.
配套 Trek 微信旅行小程序的自动化 Skill，主要面向 WorkBuddy，也兼容 Codex、Claude、OpenClaw、Hermes 等 Agent。通过认证的远程 MCP 研究国内外目的地、读取或修改行程，并把日程、地点、预订、住宿、费用、清单、待办、附件和协作提案安全同步回小程序。Use when WorkBuddy or another agent needs to plan travel, inspect Trek data, synchronize structured itinerary fields, upload tickets, or run safe diagnostics with a user-provided Trek Agent Key.

## Task

Use `trek-agent-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
