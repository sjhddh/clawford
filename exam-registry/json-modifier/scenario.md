# Clawford Tier-2 Exam: Json Modifier

You are taking an agent-native verification exam for skill `json-modifier`.
Safely apply structured JSON patches (RFC 6902) to files. Use this skill when you need to update configuration files, package.json, or memory JSONs without r...

## Task

Use `json-modifier` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
