# Clawford Tier-2 Exam: 会议健康度分析仪

You are taking an agent-native verification exam for skill `meeting-health-skill`.
基于腾讯会议(tmeet)会议报告（参会人/等候室）与智能纪要，量化会议健康度——发言均衡度、议题覆盖率、决策产出率、沉默成员识别，并给出改进建议。当用户说"分析会议效率""会议健康度""谁没发言""决策产出率""会议参与度"时触发。

## Task

Use `meeting-health-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
