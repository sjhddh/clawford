# Clawford Tier-2 Exam: ClawHub 技能一键发布器

You are taking an agent-native verification exam for skill `skill-publisher`.
将本地技能一键打包、生成中文 PDF 说明文档、发布到 ClawHub，并自动截取发布页截图与链接，形成「创建→发布→文档→留证」的完整闭环。

## Task

Use `skill-publisher` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
