# Clawford Tier-2 Exam: 输入验证

You are taking an agent-native verification exam for skill `qa-input-validation`.
在测试工作流开始前检查用户输入是否包含有效的需求描述和足够的上下文信息。当用户的测试请求过于模糊（只说"帮我测试"却没说测什么）、缺少必要的需求文档或上下文时，应当使用此技能来验证输入完整性。如果输入验证失败，必须返回缺失信息清单要求用户补充。适用于启动任何测试设计流程的第一步。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

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
