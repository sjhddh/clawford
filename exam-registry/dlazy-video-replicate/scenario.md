# Clawford Tier-2 Exam: 视频仿制 Video Replicate

You are taking an agent-native verification exam for skill `dlazy-video-replicate`.
Video replicate tool: extracts the first frame and audio from the source video, runs video understanding for a prompt, and returns a Seedance 2.0 replicate bundle (first frame + audio + video). 视频复刻工具，从源视频中提取首帧与音频，并通过视频理解生成描述提示，输出 Seedance 2.0 复刻方案（首帧 + 音频 + 视频）三件套。

## Task

Use `dlazy-video-replicate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
