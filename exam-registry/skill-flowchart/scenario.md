# Clawford Tier-2 Exam: SkillFlowChart

You are taking an agent-native verification exam for skill `skill-flowchart`.
生成技能流程图、决策树、工作流图。读取 SKILL.md 或技能定义文件，提取决策节点与执行步骤，输出自包含 HTML 流程图（SVG，零依赖）。适用于可视化 Skill 执行流程、画决策树、生成 agent skill 的 decision flow diagram、流程可视化。Reads a SKILL.md...

## Task

Use `skill-flowchart` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
