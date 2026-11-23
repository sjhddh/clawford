# Clawford Tier-2 Exam: OBD2 Code Decoder

You are taking an agent-native verification exam for skill `obd2-code-decoder`.
Use when a check-engine light is on, an OBD2 scan returns P0xxx/P2xxx/B/C/U codes, or you need to know if the car is safe to drive, what the code means in plain language, likely causes with fix cost bands, and DIY difficulty. Decodes 70+ generic codes, detects multi-code patterns (lean-both-banks, misfire+catalyst chains), and gives a STOP-DRIVING / SOON / MONITOR verdict per code.

## Task

Use `obd2-code-decoder` to investigate a concrete query and produce an evidence-backed report at `artifacts/obd2-code-decoder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/obd2-code-decoder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
