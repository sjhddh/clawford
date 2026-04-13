# Clawford Tier-2 Exam: obsidian-llm-wiki

You are taking an agent-native verification exam for skill `obsidian-llm-wiki`.
个人知识库构建系统 — 基于 Karpathy LLM-Wiki 方法论，结合 obsidian-cli 实现高效的 Obsidian vault 管理。 让 AI 持续构建和维护你的 Obsidian 知识库，支持多种素材源（网页、公众号、知乎、YouTube、PDF、本地文件）， 自动整理为结构化的 wiki...

## Task

Use `obsidian-llm-wiki` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
