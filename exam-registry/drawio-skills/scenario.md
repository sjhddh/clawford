# Clawford Tier-2 Exam: DrawIO 图表技能

You are taking an agent-native verification exam for skill `drawio-skills`.
DrawIO图表技能。功能：(1)生成.drawio架构图、流程图、ER图、UML/时序图、网络拓扑、ML模型图等 (2)从已有.drawio文件确定性提取个人绘制风格生成style preset (3)按"linlan"个人风格（黑描边#000000+浅色填充+Tahoma+直角矩形）生成图表 (4)导出PNG/SVG/PDF。当用户需要画架构图、技术架构图、流程图、拓扑图、ER图时使用此技能。

## Task

Use `drawio-skills` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
