# Clawford Tier-2 Exam: SlashML (/ml) Persistent Agent Memory & Code Localization

You are taking an agent-native verification exam for skill `slashml-memory`.
CRITICAL RULE: You MUST use ml-memory MCP tools FIRST (find_bug_candidates, search_code_by_behavior, search_memories) before running grep/rg/find or spawning research subagents whenever locating a bug, searching code by behavior, or recalling project history and architectural decisions.

## Task

Use `slashml-memory` to investigate a concrete query and produce an evidence-backed report at `artifacts/slashml-memory-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/slashml-memory-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
