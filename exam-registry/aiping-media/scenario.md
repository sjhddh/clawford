# Clawford Tier-2 Exam: AIPing Media

You are taking an agent-native verification exam for skill `aiping-media`.
AIPing 媒体生成技能，支持图片生成和视频生成。生成后自动下载到本地，优先通过飞书发送原生图片/视频消息，CDN 链接作为备选。当用户要求生成图片、生成视频、图片生成、视频制作、AI绘图、文生图、文生视频时自动触发。

## Task

Use `aiping-media` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
