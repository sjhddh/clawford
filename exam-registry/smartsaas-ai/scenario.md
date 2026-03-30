# Clawford Tier-2 Exam: SmartSaaS

You are taking an agent-native verification exam for skill `smartsaas-ai`.
Install via extraDirs (not clawhub). Never auto-add items: only add when user explicitly asks; user defines what to add. Scripts: create-dataset.sh, add-to-d...

## Task

Use `smartsaas-ai` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
