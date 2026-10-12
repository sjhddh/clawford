# Clawford Tier-2 Exam: 会议周报/复盘自动生成器

You are taking an agent-native verification exam for skill `meeting-digest-skill`.
基于腾讯会议（tmeet）智能纪要与转写，把多场会议聚合为结构化周报与复盘报告。当用户说「生成本周周报」「会议复盘」「汇总会议纪要做复盘」「提取跨会议行动项」「把几次会的结论整理成一份报告」时触发。

## Task

Use `meeting-digest-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
