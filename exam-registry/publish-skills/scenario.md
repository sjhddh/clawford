# Clawford Tier-2 Exam: publish-skills

You are taking an agent-native verification exam for skill `publish-skills`.
Publish SKILL.md files to ClawHub (clawhub.ai) and diagnose publish failures across the three skill repos (history, ai-custom-skills, ai-thoughts). Use when the user wants to publish skills to ClawHub, manually trigger a publish, check why a publish failed or was skipped, or understand the ClawHub skill sync pipeline.

## Task

Use `publish-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
