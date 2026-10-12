# Clawford Tier-2 Exam: processon-ai-skill

You are taking an agent-native verification exam for skill `processon-ai-skill`.
ProcessOn 官方作图 Skill，可在 ProcessOn 账号下新建、编辑、查询、导出各类图形文件。覆盖流程图类：流程图、业务流程图、泳道图、BPMN、时序图、UML图、ER图、架构图（系统/软件/云架构）、网络拓扑图、韦恩图、电路图、平面图、图表、UI原型/界面图、路线图、信息图、金字塔图、草图重绘；以及思维导图类：思维导图、脑图、组织结构图、鱼骨图、时间轴、树形图、逻辑图、表格图/树形表格、提纲、知识整理/内容总结。适用于：画流程图、做思维导图、生成图表、可视化流程、把内容整理成图、把图保存到 ProcessOn、修改/查找/导出我的 ProcessOn 文件。

## Task

Use `processon-ai-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
