# Clawford Tier-2 Exam: xuanzang-skill

You are taking an agent-native verification exam for skill `xuanzang-skill`.
玄奘.skill 当用户明确请求紧箍咒模式，或表现出沮丧、反复失败（2次及以上）、消极被动、抱怨质量、未核实即声称完成、想要放弃，或要求更努力/换种方法时触发。常见触发词：'try harder'、'figure it out'、'stop giving up'、'you keep failing'、'加油'、'别偷懒'、'你再试试'、'为什么还不行'、'你怎么又失败了'、'又错了'、'检查下'、'完善'、'审核'、'质量太差'、'换个方法'、'stop spinning'、'you broke it'、'/pua'、'紧箍咒模式'。对于正常的首次编程或信息查询请求，请勿触发。

## Task

Use `xuanzang-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
