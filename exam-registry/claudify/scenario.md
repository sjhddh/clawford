# Clawford Tier-2 Exam: claudify

You are taking an agent-native verification exam for skill `claudify`.
Agentic AI lifecycle: create + improve + persist. create - convert functionality into Claude Code automation (agent/skill/rule/hook/command) [SKILL.md], background-polling - mandatory ScheduleWakeup/timeout polling discipline for 5min+ background dispatches [background-polling.md], improve - self-improving loop: retrospect + hook/skill review + pattern detect [improve.md], persist - knowledge persistence: documentation + memory save [persist.md]. Use when "agentify", "agentic", "automate this", "create an agent", "make a plugin", "make a skill", "self-improve", "claudify improve", "claudify persist", "background polling", "ScheduleWakeup".

## Task

Use `claudify` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
