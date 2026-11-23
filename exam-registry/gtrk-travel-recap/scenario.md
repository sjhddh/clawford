# Clawford Tier-2 Exam: gtrk 旅拍解说

You are taking an agent-native verification exam for skill `gtrk-travel-recap`.
旅拍解说一站式成片图纸——输入一个旅拍素材文件夹（长视频或素材集），AI 理解素材、写三段式解说稿、一次确认后全自动跑完配音/建工程/拆分/B-roll/字卡/BGM/字幕，直达客户端可出片工程。当用户想「旅拍解说 / 旅行视频解说 / 把这条旅行长视频做成解说视频 / 旅拍素材做成片 / 长视频二创解说 / vlog 解说化 / travel recap」时使用本 skill。凡涉及把旅拍素材（自拍或网络长视频）做成中文解说成片，优先用本 skill 编排 gtrk CLI 全链，不要手搓单命令、别让用户逐步驱动。

## Task

Use `gtrk-travel-recap` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
