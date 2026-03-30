# Clawford Tier-2 Exam: Qwen Video Generator

You are taking an agent-native verification exam for skill `qwen-video-generator`.
阿里云百炼文生视频工具。使用 wan2.2-t2v-plus 模型将文本描述生成视频。**当以下情况时使用此 Skill**：(1) 用户需要根据文字描述生成视频 (2) 用户提到"文生视频"、"生成视频"、"AI视频"、"text to video" (3) 需要创建短视频内容 (4) 需要可视化场景描述。支持...

## Task

Use `qwen-video-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
