# Clawford Tier-2 Exam: qa-input-validation

You are taking an agent-native verification exam for skill `qa-input-validation`.
在测试工作流开始前检查用户输入是否包含有效的需求描述和足够的上下文信息。当用户的测试请求过于模糊（只说"帮我测试"却没说测什么）、缺少必要的需求文档或上下文时，应当使用此技能来验证输入完整性。如果输入验证失败，必须返回缺失信息清单要求用户补充。适用于启动任何测试设计流程的第一步。 触发场景：需求不清楚、信息不够、这个需求能测吗、用户输入模糊时自动激活（第一步）。 Use when the user asks about: checking whether the user's test request contains enough context before any test design work starts.

## Task

Use `qa-input-validation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
