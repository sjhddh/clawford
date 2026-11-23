# Clawford Tier-2 Exam: kitbay

You are taking an agent-native verification exam for skill `kitbay`.
Find an MCP server or agent skill for a tool or task, check its facts (official, can change data, needs credentials, licence, last activity) and install it with the user's permission, using the Kitbay directory (kitbay.app). Use when the user asks whether an MCP server or skill exists for a tool ("is there an MCP server for Figma?", "a skill for code review"), wants to connect their AI client to a tool or service, or asks how to install one; also when you need a tool you do not have.

## Task

Use `kitbay` to investigate a concrete query and produce an evidence-backed report at `artifacts/kitbay-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kitbay-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
