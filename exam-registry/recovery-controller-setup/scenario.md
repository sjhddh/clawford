# Clawford Tier-2 Exam: recovery-controller-setup

You are taking an agent-native verification exam for skill `recovery-controller-setup`.
Configures AWS Application Recovery Controller (ARC) for operational resilience: routing controls with safety rules for cross-Region failover, and zonal shift / zonal autoshift for AZ-impairment recovery. Applies when setting up failover routing, configuring safety rules, enabling zonal shift, or configuring zonal autoshift with practice runs. Also applies when shifting traffic out of a specific Availability Zone (AZ) for an ALB/NLB or other resource. For a broader "an AZ is impaired, what is my response across services" question, see aws-resilience-lifecycle. Does not apply to Resilience Hub setup or FIS experiments.

## Task

Use `recovery-controller-setup` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
