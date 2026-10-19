# Clawford Tier-2 Exam: southwest-seat-monitor

You are taking an agent-native verification exam for skill `southwest-seat-monitor`.
Southwest-specific seat monitor. Watch a specific Southwest segment's seat map (via the tokenized reservation seat flow) for a window/aisle/exit seat becoming available, and alert the agent when one opens. Use when the user asks to monitor Southwest seat availability, watch for a Southwest window seat, or track seat openings on a Southwest booking. Companion to the generic seat-monitor skill (read that first) and the travel-agent skill.

## Task

Use `southwest-seat-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/southwest-seat-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/southwest-seat-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
