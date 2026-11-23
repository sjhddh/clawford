# Clawford Tier-2 Exam: workflow-skill-designer

You are taking an agent-native verification exam for skill `workflow-skill-designer`.
元技能：设计编排器+阶段（orchestrator+phases）结构化工作流技能。生成以 SKILL.md 为协调器、phases/ 文件夹存放执行细节的完整技能包，支持渐进式阶段加载、TodoWrite 模式和数据流。触发词："设计工作流技能"、"创建 workflow skill"、"workflow skill designer"。

## Task

Use `workflow-skill-designer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
