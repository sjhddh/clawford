# Clawford Tier-2 Exam: Video Script Generator

You are taking an agent-native verification exam for skill `douyin-video-script-gen`.
帮用户生成爆款短视频逐字稿。按照著名大V胡说老王的爆款视频逻辑设计：1）选题（今日头条综合板块资讯找爆款）2）写开头 3）列观点 4）填内容，输出可直接朗读的逐字稿。

## Task

Use `douyin-video-script-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
