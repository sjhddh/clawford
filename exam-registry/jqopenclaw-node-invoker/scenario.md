# Clawford Tier-2 Exam: JQOpenClawNode skill

You are taking an agent-native verification exam for skill `jqopenclaw-node-invoker`.
统一通过 Gateway 的 node.invoke 调用 JQOpenClawNode 能力（file.read、file.write、process.exec、process.manage、system.run、process.which、system.info、system.screenshot、syste...

## Task

Use `jqopenclaw-node-invoker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
