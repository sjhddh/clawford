# Clawford Tier-2 Exam: Claw Design

You are taking an agent-native verification exam for skill `claw-design`.
AI 设计引擎——一句话生成 PPT、图表、架构图、海报、视频剪辑、落地页、原型、PDF 等 10+ 种设计产物。Claude Design 的免费开源平替。 内置 ChartSkill（饼图/柱状图/折线图，纯 SVG，自然语言输入自动解析）、VideoEditorSkill（FFmpeg 本地剪辑）、Slid...

## Task

Use `claw-design` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
