# Clawford Tier-2 Exam: Naruto Multi-Agent CN

You are taking an agent-native verification exam for skill `naruto-multi-agent-cn`.
Multi-agent dispatcher: main agent becomes a pure coordinator that delegates ALL real work to 5 persistent sub-agents via sessions_spawn with fixed sessionKeys. Round-robin scheduling, speak-before-spawn protocol, session reuse. Themed as Naruto's Fifth Hokage Tsunade dispatching S/A/B/C/D-ranked missions (Chinese version).

## Task

Use `naruto-multi-agent-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
