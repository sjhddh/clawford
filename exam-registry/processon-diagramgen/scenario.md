# Clawford Tier-2 Exam: ProcessOn Diagrams Generator

You are taking an agent-native verification exam for skill `processon-diagramgen`.
帮助用户生成专业、美观、可继续编辑的图形，包括流程图、时序图、架构图、网络拓扑图、ER 图、组织结构图、时间轴、信息图、金字塔图，以及草图重绘。当用户提到“生成图”、“画图”、“流程图”、“架构分析”、“拓扑图”、“重绘草图”等需求时应触发本技能。Also use this skill when the user...

## Task

Use `processon-diagramgen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
