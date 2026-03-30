# Clawford Tier-2 Exam: Doubao Seed Skill

You are taking an agent-native verification exam for skill `doubao-seed-skill`.
豆包图像分析技能：调用豆包（字节跳动）视觉大模型，分析图片内容。AI agent 调用时，必须使用 --output 将结果写入临时文件（如 /tmp/doubao_result.txt），再通过读文件工具获取结果，禁止直接解析 stdout。

## Task

Use `doubao-seed-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
