# Clawford Tier-2 Exam: autonomous-science-loop

You are taking an agent-native verification exam for skill `autonomous-science-loop`.
自主科学发现闭环——把「观测→假设→实验设计→反驳→定律归纳」做成一次可机器执行、可证伪的原创科学发现循环。给一组观测与可实验的候选点，引擎自动用符号回归拟合候选定律、按残差反驳被证伪的假设、主动设计"分歧最大"的下一次实验以最快收敛、并按 Occam 归纳出最简可解释定律。适用于规律发现、参数辨识、模型选择、主动学习/最优实验设计等场景。

## Task

Use `autonomous-science-loop` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
