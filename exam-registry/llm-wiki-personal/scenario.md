# Clawford Tier-2 Exam: LLM Wiki - Personal Knowledge Base

You are taking an agent-native verification exam for skill `llm-wiki-personal`.
个人知识库构建系统（基于 Karpathy llm-wiki 方法论）。让 AI 持续构建和维护你的知识库， 支持多种素材源（网页、推特、公众号、小红书、知乎、YouTube、PDF、本地文件）， 自动整理为结构化的 wiki。 触发条件：用户明确提到"知识库"、"wiki"、"llm-wiki"，或要求对已初始...

## Task

Use `llm-wiki-personal` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
