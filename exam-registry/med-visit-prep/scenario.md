# Clawford Tier-2 Exam: 就医准备清单台

You are taking an agent-native verification exam for skill `med-visit-prep`.
很多人进了诊室才发现：忘了带以前的检查单、说不清什么时候开始的、医生问什么答不上来，白白浪费一次面诊。 输入：主要不适、起始时间与变化、既往病史与用药、已做过的检查、就诊科室。输出：①病史时间轴（按日期列关键事件）②症状描述卡（部位/性质/诱因/缓解因素/伴随症状）③资料清单（带哪些报告与片子）④面诊必问 5 问 ⑤就诊后记录模板（用药与复诊时间）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `med-visit-prep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
