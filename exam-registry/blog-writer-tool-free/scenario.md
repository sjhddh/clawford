# Clawford Tier-2 Exam: 博客写作助手基础版

You are taking an agent-native verification exam for skill `blog-writer-tool-free`.
核心能力: 内容创作领域的专业化 AI 辅助工具,包含核心基础功能兼容. 用于需要blog writer tool相关能力的开发场景,包含结构化的工作流程和可复用的模板,帮助用户快速完成任务并保持代码质量。Use when 需要生成营销文案、写作内容、标题优化、内容创作时使用。不适用于纯技术文档撰写。

## Task

Use `blog-writer-tool-free` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
