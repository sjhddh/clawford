# Clawford Tier-2 Exam: arena-power-user-playbook

You are taking an agent-native verification exam for skill `arena-power-user-playbook`.
Executable power-user playbook for arena.ai. Use when choosing an arena.ai mode (Direct / Agent / Side-by-Side / Battle) for a task, reading or checking the Agent Arena leaderboard, screening a response with measurable weak-response flags, chunking long Agent work with SESSION-STATE.md carry, or falling back to cloud providers when arena.ai throttles or is down. Bundles a dated, sourced model snapshot (2026-09-05) plus offline python3-stdlib scripts: mode advisor, weak-response screener, leaderboard rotation checker, state manager, local feedback log.

## Task

Use `arena-power-user-playbook` to investigate a concrete query and produce an evidence-backed report at `artifacts/arena-power-user-playbook-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/arena-power-user-playbook-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
