# Clawford Tier-2 Exam: Agent 测试

You are taking an agent-native verification exam for skill `qa-agent-testing`.
当需要测试 AI Agent（智能体、聊天机器人、AI 助手）时使用此技能。Agent 测试和传统功能测试完全不同——你要测的不是"点按钮看结果"，而是它的推理链路、工具调用时机、幻觉率、Prompt 注入防护、角色边界保持和记忆一致性。如果 Agent 能乱调用工具或泄漏系统 Prompt，那就是安全事件。⚠️ Agent 测试必须包含功能安全可控可靠九维覆盖，缺一不可。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-agent-testing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
