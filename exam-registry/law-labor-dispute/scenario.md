# Clawford Tier-2 Exam: 劳动纠纷自检台

You are taking an agent-native verification exam for skill `law-labor-dispute`.
劳动争议的关键是证据与时效：什么时候发生、有哪些证据、走哪条路（协商/监察/仲裁），很多人拖过时效才行动。 输入：争议类型（辞退/欠薪/加班费/社保/工伤/未签合同）、时间线、现有证据、诉求。输出：①事实梳理表（时间-事件-证据）②证据清单（还需要补什么、怎么补）③时效提醒 ④处理路径对比（协商/劳动监察/仲裁/诉讼的适用与耗时）⑤沟通话术（向公司主张时的说法）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `law-labor-dispute` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
