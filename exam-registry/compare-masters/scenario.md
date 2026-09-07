# Clawford Tier-2 Exam: compare-masters

You are taking an agent-native verification exam for skill `compare-masters`.
Use when user asks to compare masters, compare schools, compare perspectives, 对比, 各宗怎么看, 不同宗派, 禅净之争, 性相之辩, 空有之争, or wants multiple masters to answer the same question. Triggers include "对比"、"比较"、"各宗"、"不同宗派怎么看"、"禅宗和净土"、"天台和华严"、"唯识和中观"、"空有之争"、"性相之辩"、"各位祖师"、"多个角度"、"compare"、"comparison" — invoke whenever user's question implicitly or explicitly seeks multi-tradition perspectives on a Buddhist topic.

## Task

Use `compare-masters` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
