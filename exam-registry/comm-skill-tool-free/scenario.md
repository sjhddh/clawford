# Clawford Tier-2 Exam: 沟通助手基础版

You are taking an agent-native verification exam for skill `comm-skill-tool-free`.
核心能力: 沟通协作领域的专业化 AI 辅助工具,包含核心基础功能兼容. 面向需要comm skill tool相关能力的开发场景,包含结构化的工作流程和可复用的模板,帮助用户快速完成任务并保持代码质量。沟通助手基础版是 **沟通协作** 领域的 **FREE 版本** AI Skill,专为个人用户与轻量级场景设计。通过自然语言指令驱动 AI Agent 执行任务,提供核心功能与简洁易用的操作体验.

## Task

Use `comm-skill-tool-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
