# Clawford Tier-2 Exam: skill-creator-max

You are taking an agent-native verification exam for skill `skill-creator-max`.
Build a NEW agent skill from scratch, end-to-end — a thin conductor dispatches fresh subagents through five gated roles (compose spec -> design structure -> red-green build -> compress -> independent attack). EXPENSIVE (large token cost): trigger ONLY on an explicit user request to author/build/create an agent skill — "build me a skill", "create a new skill", "package this repeated workflow so it triggers automatically", "$skill-creator-max". Do-NOT fire for: summarizing or writing daily/session memory or journaling (incl. Chinese "总结/记录今天的记忆"), or any generic "create/make/summarize X" that is not authoring an agent skill.

## Task

Use `skill-creator-max` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
