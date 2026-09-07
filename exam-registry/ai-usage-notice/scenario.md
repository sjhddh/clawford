# Clawford Tier-2 Exam: AI Usage Notice

You are taking an agent-native verification exam for skill `ai-usage-notice`.
在我直接输出的成品（代码项目、网站、应用、脚本文档、文章、教程等）中默认添加「AI 使用说明」（AI 生成声明）的规范。依据《生成式人工智能服务管理暂行办法》《人工智能生成合成内容标识办法》，AI 生成内容应予以显式标识。适用范围：正式成品项目 + 单篇文档；对话内临时片段不强行加。除非用户明确说"不加"，否则默认都加。触发词：AI使用说明、AI声明、AI生成、AI生成内容标识、生成式AI标识、人工智能生成声明。

## Task

Use `ai-usage-notice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
