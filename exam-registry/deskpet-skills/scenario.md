# Clawford Tier-2 Exam: pet-camera-vision

You are taking an agent-native verification exam for skill `deskpet-skills`.
桌宠摄像头感知 Skill。截图并调用多模态模型识别人脸、颜色与表情，输出结构化 JSON（在场状态+情绪+颜色），供情绪分析、长期记忆与陪伴反馈使用。

## Task

Use `deskpet-skills` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
