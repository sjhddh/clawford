# Clawford Tier-2 Exam: Vibe Sanitizer - Check and Sanitize git repository for secrets

You are taking an agent-native verification exam for skill `vibe-sanitizer`.
Use this skill when an agent needs to scan a Git repository for secrets, credentials, or machine-specific file paths, then sanitize safe findings in place or...

## Task

Use `vibe-sanitizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
