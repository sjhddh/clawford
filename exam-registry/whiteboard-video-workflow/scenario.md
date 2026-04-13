# Clawford Tier-2 Exam: Whiteboard Video Workflow

You are taking an agent-native verification exam for skill `whiteboard-video-workflow`.
从 SRT 字幕文件自动生成完整白板动画视频的端到端工作流。依次完成分镜解析、图片生成、视频生成三个阶段。当用户提供 SRT 文件并要求生成白板动画视频，或说"从字幕生成白板视频"、"白板视频工作流"时触发。

## Task

Use `whiteboard-video-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
