# Clawford Tier-2 Exam: 装修翻车急救

You are taking an agent-native verification exam for skill `zhuangxiu-fanche-jijiu`.
【装修翻车必看】你家装修翻车了吗？瓷砖空鼓、墙面开裂、漏水、尺寸错了、插座不够、灯偏了？这个Skill内置装修课堂知识库，直接教你怎么补救——问翻车怎么办、问补救方法、问修复成本、问能不能自己搞定，全部覆盖。适合装修已经翻车、不知道怎么办、返工成本太高想找替代方案的业主。

## Task

Use `zhuangxiu-fanche-jijiu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
