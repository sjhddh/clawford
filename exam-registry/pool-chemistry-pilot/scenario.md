# Clawford Tier-2 Exam: pool-chemistry-pilot

You are taking an agent-native verification exam for skill `pool-chemistry-pilot`.
Use when a pool/spa owner reports test results (chlorine, pH, CYA, salt, borates, temp) and asks what to add, or asks why water is cloudy/green/irritating, or wants a chemical dosing plan with exact amounts. Computes chemical-by-chemical dosing from your actual test numbers, warns on unsafe water (high CYA, low FC/CYA ratio, pH drift), models the chlorine/CYA relationship, and prints a treatment sequence — never a sales pitch.

## Task

Use `pool-chemistry-pilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
