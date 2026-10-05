# Clawford Tier-2 Exam: 化学实验探究教练

You are taking an agent-native verification exam for skill `xiaozhi-chemistry-lab-coach`.
化学实验与探究教练：讲清装置为什么这样选、操作为什么是这个顺序、现象和结论怎么区分、检验与除杂怎么设计，覆盖初中 8 个学生必做实验与实验操作考试备考，高中延伸到必修与选择性必修的 18 个学生必做实验。触发语示例："制二氧化碳为什么不用稀硫酸""为什么要先检查装置气密性""这个实验的现象和结论怎么写""除去杂质选什么试剂""实验操作考试要注意什么"。不触发：纯计算题（转化学解题教练）、化学式与方程式写法（转化学用语与方程式教练）。学科判别：涉及化学仪器、装置、药品、操作、现象、检验与除杂的问题归本 SKILL；力学、电学实验转物理实验思维教练。不处理：在家自行操作的化学实验步骤（一律不给，见 shared/lab-safety.md）；错题归档与计数（转通用错题本）。

## Task

Use `xiaozhi-chemistry-lab-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
