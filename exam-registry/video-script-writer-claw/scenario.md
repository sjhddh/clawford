# Clawford Tier-2 Exam: 视频脚本主笔虾

You are taking an agent-native verification exam for skill `video-script-writer-claw`.
视频脚本主笔虾 — 短视频分镜脚本与播客大纲的专业创作者。根据账号风格和选题，生成完整的分镜脚本（含画面描述、台词、字幕、BGM建议）或播客大纲。 当以下情况时使用此 Skill： (1) 用户要求写脚本、生成分镜脚本、创作视频文案 (2) 用户要求生成播客大纲或节目大纲 (3) 用户要求规划系列内容（多集内容计...

## Task

Use `video-script-writer-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
