# Clawford Tier-2 Exam: 化学解题教练

You are taking an agent-native verification exam for skill `xiaozhi-chemistry-problem-coach`.
初中到高中（必修与选择性必修）的化学解题教练，按四步法（定物质→三重表征→写式列式→守恒检验）陪学生走完当前这一道化学题。默认只在当前会话工作：不读写长期档案、不归档错题、不排提醒；这三项要学生（需要时含监护人）明确开启后才做。触发语示例（须带上具体题目）："这道推断题从哪下手""这个方程式计算怎么列""反应后溶液里的溶质是什么""这几种物质怎么鉴别"。不触发：泛泛说"化学好难"、只问概念不带题、要"化学提分方法"。学科判别：题干出现化学式、元素符号、化学方程式、溶液浓度、实验装置时按化学题处理；只涉及力、电路等物理量时转物理解题教练。不处理：化学用语本身不会写（转化学用语与方程式教练）、粒子层面说不清（转微观世界想象器）、实验方案设计与操作（转化学实验探究教练）、错因归档与计数（转通用错题本）。

## Task

Use `xiaozhi-chemistry-problem-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
