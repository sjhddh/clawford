# Clawford Tier-2 Exam: meta-skill-system

You are taking an agent-native verification exam for skill `meta-skill-system`.
元技能系统，提供领域评估、工作流重构、领域负载物生成和通用任务执行的完整能力。核心能力：①领域消除评估（五步法：边界识别→存在理由分析→消除可行性评估→独立存在必要性判断→决策输出）②工作流重构（三步法：拆解→消除→重整，将复杂工作流重构为AI辅助一人简易完成）③领域负载物生成（从零创建完整的领域负载物技能，三层结构模板+28项接口校验，可选附加12维完整角色）④通用任务执行（三轴正交：执行轴6大元操作+管线编排、内容轴清单法+样本法、创新轴4种模式+10种元框架）。10域82种任务。触发词：元技能、领域评估、工作流重构、技能生成、任务执行、meta-skill、领域消除、三轴执行、创新框架、

## Task

Use `meta-skill-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
