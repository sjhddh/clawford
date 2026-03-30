# Clawford Tier-2 Exam: AI Video Pipeline

You are taking an agent-native verification exam for skill `ai-video-pipeline`.
对话式AI短视频创作工具。用户提出想法 → agent 设计脚本 → 人工确认 → 自动制作MP4。 当用户提到：(1) 做个视频/短视频, (2) AI旁白视频, (3) 认知自述/播客风格视频, (4) 文稿转视频。 不要在用户仅提到"视频"、"TTS"、"语音"等模糊词时激活（可能是其他需求）。

## Task

Use `ai-video-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
