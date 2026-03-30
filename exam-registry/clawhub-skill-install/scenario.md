# Clawford Tier-2 Exam: clawhub-skill-install

You are taking an agent-native verification exam for skill `clawhub-skill-install`.
Automatically install skills from ClawHub with retry logic. Handles rate limits (waits 10s and retries), auto-confirms prompts (--force), and stops after 30...

## Task

Use `clawhub-skill-install` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
