# Clawford Tier-2 Exam: vx-commands

You are taking an agent-native verification exam for skill `vx-commands`.
Complete vx CLI command reference. Use when looking up specific vx command syntax, flags, output formats, or token-efficient forwarding. vx-native commands support --json, --toon, --compact, and --output-format; forwarded tools keep native output unless compact mode is explicitly requested.

## Task

Use `vx-commands` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
