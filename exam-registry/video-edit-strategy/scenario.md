# Clawford Tier-2 Exam: video-edit-strategy

You are taking an agent-native verification exam for skill `video-edit-strategy`.
分析素材与用户意图，输出结构化 JSON 剪辑策略（分镜、时间线、转场、音频、文字）。当用户要求制作短视频、混剪、或提供了素材但未给出具体剪辑指令时调用。策略输出供 ffmpeg-cli / ffmpeg-video-editor 等下游 skill 执行。

## Task

Use `video-edit-strategy` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
