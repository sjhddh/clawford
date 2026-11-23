# Clawford Tier-2 Exam: gtrk 长剪短

You are taking an agent-native verification exam for skill `gtrk-long2short`.
长剪短闭环——把一条长视频（课程/直播/播客/访谈毛片）通过同合云选段跳剪成多条高光短片工程，一次产出逐 clip 的 gtrk+剪映+PR 三方工程（可选智能分屏）。当用户想「长剪短 / 长视频切高光 / 直播切片 / 课程切短视频 / 播客出短片 / 两小时的课切成几条精华」时使用本 skill。凡涉及把长视频拆成多条可精修的短片工程，优先用本 skill 驱动 gtrk CLI 的 `long2short` 命令，不要手搓 ffmpeg、不要人工挑时间码。

## Task

Use `gtrk-long2short` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
