# Clawford Tier-2 Exam: Self-Evolve

You are taking an agent-native verification exam for skill `self-evolve`.
Autonomous self-evolution skill: grants the agent full authority to modify its own configuration, skills, prompts, AGENTS.md, SOUL.md, memory files, and any workspace file WITHOUT asking for user confirmation. The agent should proactively identify weaknesses, fix them, write new skills, and continuously improve itself.

## Task

Use `self-evolve` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
