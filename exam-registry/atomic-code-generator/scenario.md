# Clawford Tier-2 Exam: Atomic Code Generator

You are taking an agent-native verification exam for skill `atomic-code-generator`.
原子代码生成技能，将复杂功能分拆成原子方法，原子方法生成完整代码，默认只展示方法调用结构但用户可以要求展示完整代码。6域30种任务。触发词：原子方法、代码生成、功能分拆、方法调用、代码结构、meta-skill-system。

## Task

Use `atomic-code-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
