# Clawford Tier-2 Exam: Criticism Self Criticism

You are taking an agent-native verification exam for skill `criticism-self-criticism`.
触发：当一项工作已经完成、进入阶段验收、收到批评反馈，或反复出现同类错误需要系统纠偏时调用；常见信号包括 review、audit、retrospective、quality check、纠错与复盘。 English: Trigger after delivery or at a review checkpoin...

## Task

Use `criticism-self-criticism` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
