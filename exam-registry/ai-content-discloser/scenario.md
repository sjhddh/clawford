# Clawford Tier-2 Exam: ai-content-discloser

You are taking an agent-native verification exam for skill `ai-content-discloser`.
ai-content-discloser — 为 AI 参与（全生成/辅助/混合）的内容一键生成合规披露声明：显式声明（中/EN）+ 隐式元数据标注 + 平台贴法，依据中国《人工智能生成合成内容标识办法》与 EU AI Act 第 50 条口径。

## Task

Use `ai-content-discloser` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
