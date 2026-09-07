# Clawford Tier-2 Exam: resilience-program-design

You are taking an agent-native verification exam for skill `resilience-program-design`.
Designs a resilience program: how to structure and standardize resilience policies across an organization, team, or portfolio (tiered policy model with availability/RTO/RPO targets and DR approach selection), and how often to run resilience activities (operational cadence). Applies when the user asks how to structure policies org-wide, what tiers/targets to set, which DR approach fits a tier, or how frequently to run assessments, FIS experiments, GameDays, or autoshift practice. Does not apply to creating or configuring a specific policy or resource for a single workload (use resilience-hub-getting-started), to step-by-step lifecycle execution (see aws-resilience-lifecycle), or to service-specific setup.

## Task

Use `resilience-program-design` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
