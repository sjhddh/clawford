# Clawford Tier-2 Exam: 沟通助手专业版

You are taking an agent-native verification exam for skill `comm-skill-tool-pro`.
核心能力: 沟通协作领域的专业化 AI 辅助工具,包含企业级高级功能兼容. 适合需要comm skill tool相关能力的开发场景,提供标准化流程和配置参考。Use when 需要AI模型调用、智能对话、Agent编排、LLM应用时使用。不适用于需要100%确定性的关键决策。适用于独立开发者、企业团队和自动化工作流场景。

## Task

Use `comm-skill-tool-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
