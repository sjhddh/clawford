# Clawford Tier-2 Exam: toilet-triage-ranger

You are taking an agent-native verification exam for skill `toilet-triage-ranger`.
Use when a toilet runs constantly, refills by itself, phantom-flushes, or the flush is weak and you're staring into the tank wondering what to touch — symptom-based diagnosis tree (flapper vs fill-valve vs chain vs flange), exact water-waste math from your meter (a stuck flapper wastes 950-9500 L/day, doubling a household's water use), safe DIY-vs-shutoff decision, the 10-minute flapper replacement protocol, weak-flush causes ranked, and a shutoff-valve-stuck rescue path.

## Task

Use `toilet-triage-ranger` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
