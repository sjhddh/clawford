# Clawford Tier-2 Exam: 视频剪辑规划

You are taking an agent-native verification exam for skill `video-cut`.
把长视频按 Agent 选择的原片区间剪成短片。作为两阶段创作流程中的剪辑环节，读取 clip_plan.json 与源视频， 输出 edited_source.mp4；随后 Agent 按输出时间线写 narration.json。支持单视频与多视频（sources manifest）拼剪， 本工具不读取、不映射旁白。 触发词：视频剪辑、剪辑式解说、video cut、clip plan、拼剪。

## Task

Use `video-cut` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
