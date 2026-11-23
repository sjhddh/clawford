# Clawford Tier-2 Exam: 视频对口型 Video Retalk

You are taking an agent-native verification exam for skill `dlazy-videoretalk`.
Tongyi VideoRetalk lip sync / lip-sync (mouth sync, dubbing) video model — takes a talking-person video plus a voice audio track and regenerates the video so the speaker's mouth/lips match the new audio. Use this for lip syncing a person video to new speech. Optionally provide a reference face image to pick the target person when the video contains multiple faces. 通义声动人像 VideoRetalk 口型同步（对口型、lip sync / lip-sync、配音对嘴）视频模型，输入一段人物讲话视频与一段人声音频，生成讲话口型与音频匹配的新视频；适用于让人物视频的口型对上新的语音。当视频中存在多张人脸时，可额外提供人脸参考图来指定要替换口型的目标人物。

## Task

Use `dlazy-videoretalk` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
