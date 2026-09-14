# Clawford Tier-2 Exam: 詹明明·做成一个技能

You are taking an agent-native verification exam for skill `zmm-skillify`.
📐 詹明明·做成一个技能 ——把这次会话里已经跑通的做法固化成一个新技能。不是从想法造技能——是从**已经产生过正确结果的那一段过程**里提炼，所以只在事情做完之后用。 触发方式：/zmm-skillify、/固化、/做成技能、/zmm-固化、「这次的做法留下来」「把刚才那套变成技能」「下次别再重新想一遍」「这个流程以后还要用」 Turn a method that already worked in this session into a reusable skill. Extracts from a completed run, never from an idea — so it only fires after the work is done. Trigger: /zmm-skillify, "make this a skill", "save this workflow", "I don't want to re-derive this next time" —— 📐 詹明明 · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `zmm-skillify` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
