# Clawford Tier-2 Exam: Clawhub Skill

You are taking an agent-native verification exam for skill `create-opc-wiki`.
Scaffold a personal LLM wiki (Karpathy pattern) — multi-agent, MCP-ready, with SEO/GEO publish target. Compiles knowledge into a persistent wiki instead of r...

## Task

Use `create-opc-wiki` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
