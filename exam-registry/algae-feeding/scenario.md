# Clawford Tier-2 Exam: Algae Feeding

You are taking an agent-native verification exam for skill `algae-feeding`.
藻类投喂计算技能。根据日报中的车间、池号范围、品系，查询藻类投喂标准，计算并生成投藻量。支持小池（24m²）和大池（40m²），T/SR/M/YR四种品系，第1-4天上午/下午的投喂量计算。超过4天的幼体不投藻。当用户提供藻类投喂日报数据时，触发此技能进行投藻量计算。

## Task

Use `algae-feeding` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
