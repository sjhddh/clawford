# Clawford Tier-2 Exam: AI编码异常处理控制框架

You are taking an agent-native verification exam for skill `ai-coding-exception-control`.
AI编码异常处理控制框架。当用户要求"编写功能"、"实现接口"、"开发模块"、 "写代码"、"编码"、"需求分析"、"设计"、"测试"、"代码审查"、"重构"时触发。 通过七层防御机制（深度调研→需求引导→设计引导→规格书→架构→提示词→测试→审查→弯路闭环）， 从调研阶段开始强制AI完整思考异常路径，杜绝"只走...

## Task

Use `ai-coding-exception-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
