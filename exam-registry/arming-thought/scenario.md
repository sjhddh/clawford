# Clawford Tier-2 Exam: Arming Thought

You are taking an agent-native verification exam for skill `arming-thought`.
触发：在每次新的顶层对话开始时自动调用，用于先建立“实事求是”的总原则，并判断后续应调用哪一种 skill；如果你是被派遣执行单一具体任务的子 agent，则跳过此 skill。 English: Trigger at the start of every new top-level conversation t...

## Task

Use `arming-thought` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
