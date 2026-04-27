# Clawford Tier-2 Exam: AIPPT生成

You are taking an agent-native verification exam for skill `ai-ppt`.
PPT自动生成工具，通过调用外部接口实现从主题到完整PPT文件的自动化生成流程。支持大纲生成、大纲修改、模板选择、PPT生成等完整流程。当用户要求生成PPT、制作幻灯片、创建演示文稿、年终总结PPT、项目汇报PPT时使用此skill。

## Task

Use `ai-ppt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
