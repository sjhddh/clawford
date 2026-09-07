# Clawford Tier-2 Exam: 酷家乐AI室内设计

You are taking an agent-native verification exam for skill `ai-kujiale-design`.
基于酷家乐(Kujiale)开放能力的室内智能设计技能,通过分步式对话完成 户型确认、风格选择、布局生成、渲染出图全流程. 核心能力: - 户型获取: 支持小区名搜索与户型图上传两种路径,自动识别并生成可设计户型 - 风格匹配: 基于偏好标签推荐硬装风格,支持封面图预览与单选确认 - 智能布局: 自动布置家具,生...

## Task

Use `ai-kujiale-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
