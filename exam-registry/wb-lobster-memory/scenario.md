# Clawford Tier-2 Exam: Wb Lobster Memory

You are taking an agent-native verification exam for skill `wb-lobster-memory`.
WorkBuddy 接入 lobster-memory 长期图记忆的桥接技能。作为现有云端/工作区 markdown 记忆之外的并行补充层，用知识图谱（实体-关系-情绪 valence）记录用户的偏好、项目脉络与反馈，支持按需回忆与定期巩固遗忘。抽取 JSON 由 WorkBuddy 自身兼任 LLM 生成。当用...

## Task

Use `wb-lobster-memory` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
