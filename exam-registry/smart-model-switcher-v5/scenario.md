# Clawford Tier-2 Exam: Smart Model Switcher V5

You are taking an agent-native verification exam for skill `smart-model-switcher-v5`.
智能模型自动切换 V5.0.2 - 多模态感知，自动识别图片/视频/音频/代码/文本任务，切换到最适合的模型。支持图片理解(qwen3-vl-plus)、视频音频(qwen3.5-plus)、代码(glm-5)、Office文档(MiniMax-M2.5)、推理等场景。零感知切换，无需手动操作。

## Task

Use `smart-model-switcher-v5` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
