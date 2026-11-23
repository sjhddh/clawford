# Clawford Tier-2 Exam: Ai Artist Workstation

You are taking an agent-native verification exam for skill `ai-artist-workstation`.
AI接单画师工作站是一款面向商业画师和设计师的AI绘画工具. 支持双引擎智能路由、8种风格模板全覆盖、接单SOP全流程闭环,实现98%面部保持. 核心能力: - 双引擎智能路由(写实/艺术风格自动选择) - 8种风格模板全覆盖 - 接单SOP全流程闭环 - 多级引擎降级链与敏感词审核

## Task

Use `ai-artist-workstation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
