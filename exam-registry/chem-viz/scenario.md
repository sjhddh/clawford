# Clawford Tier-2 Exam: chem-viz

You are taking an agent-native verification exam for skill `chem-viz`.
化学可视化引擎。将抽象化学过程转化为交互式可视化HTML页面， 让学生"看见"化学：分子转得起来、电子流看得见、平衡拉得动、流程拆得开。 支持9类可视化：分子结构3D/氧化还原/化学平衡/电化学/工艺流程/有机3D/晶胞/实验装置/离子平衡。 核心技术：纯Canvas2D+手动3D数学（零外部依赖，file://协议100%可靠）， 附带3Dmol.js/JSXGraph/Three.js备选方案与常见陷阱修复指南。 与chem-coach联动，两级验证流程保证产物质量。

## Task

Use `chem-viz` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
