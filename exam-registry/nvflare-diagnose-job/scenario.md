# Clawford Tier-2 Exam: nvflare-diagnose-job

You are taking an agent-native verification exam for skill `nvflare-diagnose-job`.
Use when the user asks why a reported NVFLARE job failure signal occurred: the job failed, stalled, timed out, lost clients, ended with EXECUTION_EXCEPTION, or produced suspicious errors. Diagnose in simulation, POC, or production by collecting bounded evidence and mapping failure patterns to recovery actions.

## Task

Use `nvflare-diagnose-job` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
