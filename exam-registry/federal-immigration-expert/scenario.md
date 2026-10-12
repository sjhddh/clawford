# Clawford Tier-2 Exam: federal-immigration-expert

You are taking an agent-native verification exam for skill `federal-immigration-expert`.
Generic Canadian federal immigration policy expert (IRCC Express Entry / CRS / CEC / FSW / FST). Fetches policy in real time from official sources, detects and surfaces updates, and computes multi-stream eligibility plus CRS scoring (with itemized detail) for any candidate. All policy judgements follow live official sources, never stale offline data.

## Task

Use `federal-immigration-expert` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
