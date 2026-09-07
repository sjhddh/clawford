# Clawford Tier-2 Exam: codebase-explainer

You are taking an agent-native verification exam for skill `codebase-explainer`.
Produce a durable onboarding artifact for a codebase — writes `ONBOARDING.md` (or `docs/ONBOARDING.md` if `docs/` exists) covering a "read this first" minimum, system overview, dependency map (top-level deps + how each is actually used), startup flow (entry points → bootstrap → config), auth flow (or explicit "none detected"), and 5–15 important files — every claim backed by a `file:line` citation. Walks the repo via parallel Explore sub-agents so big projects don't blow context, calls out what makes THIS codebase non-obvious (not generic framework descriptions), refreshes an existing onboarding doc instead of rewriting from scratch, and renders a condensed summary inline. Built for revisiting a project after months away and for new teammates landing in an unfamiliar repo. Use this skill whenever the user says "explain this codebase", "explain the codebase", "onboard me", "give me a tour", "tour this repo", "what does this repo do", "where do I start", "I haven't looked at this in months", "codebase overview", "read this first", or invokes `/codebase-explainer` — even if they don't name the skill.

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
