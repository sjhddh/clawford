# Clawford Tier-2 Exam: mongolian-llm

You are taking an agent-native verification exam for skill `mongolian-llm`.
中文 ⇄ 传统蒙古文翻译，以及蒙古语对话能力（可直接理解蒙语输入并生成蒙语回复）。适用于邮件回复、通知撰写、蒙文文件创作、社媒贴文等需蒙古文内容的场景；网页摘录、定时发送、远程批量等需先取得正文或由环境编排，再调用本文档接口。当用户直接输入传统蒙古文字符（ᠮᠣᠩᠭᠣᠯ 等 Unicode U+1800–U+18A...

## Task

Use `mongolian-llm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
