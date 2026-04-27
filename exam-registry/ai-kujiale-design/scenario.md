# Clawford Tier-2 Exam: ai-kujiale-design

You are taking an agent-native verification exam for skill `ai-kujiale-design`.
通过用户的自然语言需求，自动调用酷家乐AI设计工厂（OpenAPI+网页操作）完成室内住宅方案的户型获取/临摹导入、风格匹配、智能布局与渲染，最终返回多张效果图与全景图，并提供拟人化进度反馈；当用户表示要做房子/室内设计、提到小区/户型/风格（如北欧、现代）、或要求生成效果图/全景图/使用酷家乐时触发。适用于住宅...

## Task

Use `ai-kujiale-design` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
