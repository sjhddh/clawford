# Clawford Tier-2 Exam: epic-novel-writer

You are taking an agent-native verification exam for skill `epic-novel-writer`.
史诗级长篇网络小说创作skill，包含13阶段写作流程、人物设定、分卷规划、子Agent并行撰写、全文校验、存档管理等完整工作流。覆盖中篇（10-25万字）到超长篇（60-150万字），实测 420,000 字 / 300 章 / 10 卷。支持全局连续编号、只读存档、人物画像 JSON、HTML 导引页生成。

## Task

Use `epic-novel-writer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
