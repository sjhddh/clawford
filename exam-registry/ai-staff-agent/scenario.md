# Clawford Tier-2 Exam: ai-staff-agent

You are taking an agent-native verification exam for skill `ai-staff-agent`.
AI Staff Agent — the production workhorse that handles boilerplate code generation, data cleaning pipelines, copy variant generation, and KM (Knowledge Management) research pulls. Use this skill whenever the user needs to scaffold code, clean/transform datasets, generate multiple copy variations fro

## Task

Use `ai-staff-agent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
