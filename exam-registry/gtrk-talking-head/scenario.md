# Clawford Tier-2 Exam: gtrk 口播视频成片

You are taking an agent-native verification exam for skill `gtrk-talking-head`.
通用口播视频创作图纸（口播链）——把一条或一组真人出镜的口播毛片，做成完整包装的可出片工程：外录音轨对齐换轨 → 多段拼接 → oralcut 粗剪 → 拆分派单 → B-roll/MG 字卡 → BGM → 字幕 → 客户端出片。当用户想「口播视频从毛片做到成片 / 口播完整包装 / 我拍了几段口播帮我做成一期 / 领夹麦音轨怎么合进去 / 口播加 B-roll 加字卡 / talking head 成片」时使用本 skill。凡涉及真人口播的完整成片编排，优先用本图纸驱动全链，别只跑一句 oralcut 了事、也别手搓 ffmpeg。

## Task

Use `gtrk-talking-head` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
