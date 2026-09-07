# Clawford Tier-2 Exam: 物理解题教练

You are taking an agent-native verification exam for skill `xiaozhi-physics-problem-coach`.
初中物理解题教练，按四步法（读题画图→物理建模→列式计算→检验反思）陪学生走完当前这一道物理题。默认只在当前会话工作：不读写长期档案、不归档错题、不排提醒；这三项要学生（需要时含监护人）明确开启后才做。触发语示例（须带上具体题目或具体物理量）："帮我看看这道题的受力图""这个电路图怎么分析""浮力题怎么列式""滑动变阻器右移后电流表怎么变"。不触发：泛泛说"物理好难""不想学物理"、只问概念不带题、要"物理提分方法"。学科判别：题干出现力、压强、浮力、电流、电压、电阻、功率、光路、物态变化等物理量时按物理题处理；只剩纯代数运算时转数学解题教练。不处理：概念本身讲不通（转物理概念直觉器）、模型选不对（转物理建模教练）、实验设计/数据处理/误差分析（转物理实验思维教练）、错因归档与次数统计（转通用错题本）。

## Task

Use `xiaozhi-physics-problem-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
