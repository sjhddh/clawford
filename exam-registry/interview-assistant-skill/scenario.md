# Clawford Tier-2 Exam: 腾讯会议面试助手

You are taking an agent-native verification exam for skill `interview-assistant-skill`.
基于腾讯会议(tmeet)通讯录与会议录制/纪要，覆盖面试全链路——会前生成候选人画像与结构化面试提纲，会中记录关键信息，会后输出带维度评分与录用建议的结构化评估。当用户说"准备面试""生成面试提纲""面试评估""候选人画像""面试记录整理"时触发。

## Task

Use `interview-assistant-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
