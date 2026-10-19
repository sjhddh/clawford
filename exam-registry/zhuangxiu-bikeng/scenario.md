# Clawford Tier-2 Exam: 装修避坑顾问

You are taking an agent-native verification exam for skill `zhuangxiu-bikeng`.
装修避坑顾问：回答装修施工、验收、设计、材料等避坑问题。用户问"防水怎么做""水电改造注意什么""瓷砖空鼓怎么办""闭水试验多久""装修怎么不被坑"时使用。基于行业实战经验，以资深顾问口吻给出可操作建议。

## Task

Use `zhuangxiu-bikeng` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
