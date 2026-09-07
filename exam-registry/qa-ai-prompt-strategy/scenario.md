# Clawford Tier-2 Exam: AI 测试提示词策略

You are taking an agent-native verification exam for skill `qa-ai-prompt-strategy`.
根据不同的测试目标和上下文，选择最佳的提示词模式来驱动AI生成高质量的测试用例。当AI输出的测试用例质量不够好、太泛泛、或者深度不够时，问题往往不在AI而在提示词。此技能提供结构化提示词模板，注入前面步骤产出的分析结果，输出包含角色定义、输出格式规范和约束条件的优化提示词。⚠️ 作为工作流的必过步骤，不得跳过。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-ai-prompt-strategy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
