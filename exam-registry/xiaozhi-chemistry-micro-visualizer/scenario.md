# Clawford Tier-2 Exam: 微观世界想象器

You are taking an agent-native verification exam for skill `xiaozhi-chemistry-micro-visualizer`.
用粒子图景讲清化学现象背后发生了什么：分子、原子、离子，化学变化的本质，质量守恒，溶解；高中延伸到必修与选择性必修（原子结构与化学键、反应中的能量、平衡的动态本质、电离与水解、分子的空间结构与晶体、有机物的结构）。触发语示例："为什么热胀冷缩""化学变化和物理变化在微观上有什么不同""为什么反应前后质量守恒""盐溶在水里去哪了""酸为什么都有相似的性质"。不触发：带具体数据要算的题（转化学解题教练）、化学式或方程式怎么写（转化学用语与方程式教练）、实验怎么做（转化学实验探究教练）。学科判别：问的是"粒子层面为什么"的化学问题归本 SKILL；问的是力、电、光等物理概念转物理概念直觉器。

## Task

Use `xiaozhi-chemistry-micro-visualizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
