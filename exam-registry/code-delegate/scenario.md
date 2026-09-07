# Clawford Tier-2 Exam: Code Delegate

You are taking an agent-native verification exam for skill `code-delegate`.
面向团队与企业的高级代码委派工具,在免费版基础上扩展批量委派、并行执行、权限治理等能力。核心能力: - 多任务并行委派与任务队列管理 - 写入保护插件与权限治理 - 团队协作会话与任务分发 - 委派质量审计与代码审查报告 - 批量测试验证与回归测试 适用场景: - 企业级批量代码重构 - 多模块并行开发与测试 -...

## Task

Use `code-delegate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
