# Clawford Tier-2 Exam: 结构化开发工具专业版

You are taking an agent-native verification exam for skill `code-dev-v1-tool-pro`.
|-. 在需要code dev v1 tool相关能力的开发场景,提供工作流程和配置参考. 该工具基于用户反馈进行了深度优化,提升了可操作性。Use。适用于独立开发者、企业团队和自动化工作流场景，提供结构化输出与错误处理机制，支持中文交互，即开即用。Use when 需要代码生成、编程辅助、调试测试、开发部署时使用。不适用于无明确技术栈的模糊需求。

## Task

Use `code-dev-v1-tool-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
