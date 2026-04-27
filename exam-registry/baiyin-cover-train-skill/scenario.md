# Clawford Tier-2 Exam: baiyin-cover-train-skill

You are taking an agent-native verification exam for skill `baiyin-cover-train-skill`.
当用户希望通过百音开放平台训练 AI 歌手模型、查询训练任务状态，或根据已有 taskId 返回最终训练结果时使用。

## Task

Use `baiyin-cover-train-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
