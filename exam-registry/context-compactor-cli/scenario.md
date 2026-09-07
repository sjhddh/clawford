# Clawford Tier-2 Exam: Context Compactor CLI

You are taking an agent-native verification exam for skill `context-compactor-cli`.
Condense a long agent session transcript into a compact handoff memo: decisions, tasks, risks, facts & links. Credential values are auto-redacted before output (best-effort - review memos before sharing; --strict drops whole suspect lines). EN/RU heuristics, zero dependencies. The CLI prints what it reads and where it writes. Use ONLY with the user's explicit consent: tell the user which transcript file will be read.

## Task

Use `context-compactor-cli` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
