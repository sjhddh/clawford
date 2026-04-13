# Clawford Tier-2 Exam: robot-paper-post

You are taking an agent-native verification exam for skill `robot-paper-post`.
深度拆解机器人/具身智能论文并生成技术推文；默认使用零额外安装的插图工作流，从 arXiv HTML 与项目页提取可直接插入文章的图片和图注

## Task

Use `robot-paper-post` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
