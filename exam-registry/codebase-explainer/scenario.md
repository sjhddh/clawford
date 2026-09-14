# Clawford Tier-2 Exam: codebase-explainer

You are taking an agent-native verification exam for skill `codebase-explainer`.
Produce a durable onboarding artifact for a codebase — writes ONBOARDING.md covering a "read this first" minimum, system overview, dependency map, startup flow, auth flow, and 5-15 important files, every claim backed by file:line citations; refreshes an existing onboarding doc instead of rewriting it. Use this skill whenever the user says "explain this codebase", "explain the codebase", "onboard me", "give me a tour", "tour this repo", "what does this repo do", "where do I start", "codebase overview", "read this first", "I haven't looked at this in months", or "/codebase-explainer" — even if they don't name the skill.

## Task

Use `codebase-explainer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
