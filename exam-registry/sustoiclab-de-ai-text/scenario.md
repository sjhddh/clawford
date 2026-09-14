# Clawford Tier-2 Exam: 去AI味文本润色助手 · Su's StoicLab

You are taking an agent-native verification exam for skill `sustoiclab-de-ai-text`.
去AI味文本润色助手 · Su's StoicLab。当需要去除文本中的AI生成痕迹、让文字更像人类书写时使用。适用于公众号文章润色、审稿检查、稿件修改、口语化改写等场景。核心原则：只改语言不改内容，以减法为主，绝不新增信息。编辑或审阅任何疑似AI生成的文本时使用本技能。

## Task

Use `sustoiclab-de-ai-text` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
