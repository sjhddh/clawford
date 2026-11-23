# Clawford Tier-2 Exam: gtrk 智能口播剪辑

You are taking an agent-native verification exam for skill `gtrk-oralcut`.
智能口播剪辑闭环——开剪前主动检查同目录独立口播音频，有则先对轨换声，再通过同合云剪掉废话/重复/长停顿，产出客户端(gtrk)+剪映+PR 三方工程。当用户想「剪口播/剪个视频/智能剪辑/去掉废话和停顿/把这条口播剪一版/出剪映草稿/生成剪辑工程/oral cut」时使用本 skill。凡涉及把口播毛片做成可二次精修的剪辑工程，优先用本 skill 驱动 gtrk CLI，不要手搓 ffmpeg。

## Task

Use `gtrk-oralcut` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
