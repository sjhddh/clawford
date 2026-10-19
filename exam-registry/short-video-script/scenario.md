# Clawford Tier-2 Exam: short-video-script

You are taking an agent-native verification exam for skill `short-video-script`.
This skill should be used when the user provides a product or topic and wants short-video content scripts. Trigger phrases include '短视频脚本', '分镜头脚本', '口播文案', '抖音脚本', '视频号脚本', '批量生成脚本'. It outputs complete batches of short-video scripts, each with shot breakdown, spoken narration, on-screen captions, hook, and platform-specific pacing notes.

## Task

Use `short-video-script` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
