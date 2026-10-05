# Clawford Tier-2 Exam: claw-rl-prm-judge

You are taking an agent-native verification exam for skill `claw-rl-prm-judge`.
Score and improve AI agent responses across six dimensions (intent, reasoning, tools, safety, efficiency, value). Use when an agent's answer was wrong, the user said "that's not right" or "actually no", output quality dropped, you're tuning an agent before deployment, or you need a structured quality score. Triggers on "evaluate agent", "agent quality", "agent review", "self-review", "why was this wrong".

## Task

Use `claw-rl-prm-judge` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
