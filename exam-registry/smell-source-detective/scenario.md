# Clawford Tier-2 Exam: smell-source-detective

You are taking an agent-native verification exam for skill `smell-source-detective`.
Use when your home has a mystery smell you can't locate (sewage in the bathroom morning-only, fish smell with no fish, musty bedroom, gas whiff near the stove, sweet chemical in the hallway) — a diagnosis engine that ranks probable sources from smell type + location + timing triggers, separates the four DANGER smells (gas, smoke, sewage backup, dead animal in walls) that need immediate action from the annoying-but-safe ones, gives a no-tools localization protocol (sniff-mapping, dry-trap tests, fixture-by-fixture elimination), and surface-specific kill protocols (dry P-traps, enzymatic vs bleach, mold remediation decision line).

## Task

Use `smell-source-detective` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
