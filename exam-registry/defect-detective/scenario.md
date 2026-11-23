# Clawford Tier-2 Exam: defect-detective

You are taking an agent-native verification exam for skill `defect-detective`.
修 bug 之前的第一站：对缺陷信号（bug 报告、错误信息、堆栈或失败日志）做只读分诊——这是已知问题吗、该归谁负责、最近改了什么。归一化稳定指纹，跨栈查重复工单（不过滤组件），仅在涉及层已知时关联近期代码变更，推断可能的归属团队，在新建工单前返回结构化结论与可直接复制的建票建议。只分诊、不修复：修复类技能解决"怎么修"，本技能回答修之前的三个问题，二者上下游互补。严格只读：绝不创建、流转、评论或关联工单，也绝不修改代码。已对真实 Jira 工单系统完成三级查重冒烟（命中与无匹配双路径）及 git blame 变更关联验证。触发词："缺陷分诊"、"查重复工单"、"这个缺陷已知吗"、"这个 bug 有人报过吗"、"建票前先查重"、"defect detective"、"triage this bug"、"is this a known issue"、"is this a duplicate"、"who owns this"。

## Task

Use `defect-detective` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
