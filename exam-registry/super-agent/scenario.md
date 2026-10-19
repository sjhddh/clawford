# Clawford Tier-2 Exam: super-agent

You are taking an agent-native verification exam for skill `super-agent`.
超级智能体闭环（整合与进阶·元能力之巅）。把已建成的超越性能力—— 长程自主规划(long-horizon-planner) · 自我反思闭环(self-reflection-loop) · 多步工具链编排(toolchain-orchestrator) · 可靠推理与自验证(reason-verify) · 持续学习记忆(continual-memory-engine) · 主动目标设定(proactive-goal-setter) · 代码生成自验证(code-self-verifier) · 检索增强生成(rag) · 工具调用(tool-use) —— 熔成一条「感知→规划→执行→自验证→反思→记忆→再规划」的连续自进化 agent 闭环。 当希望让 agent 以接近(乃至超越)一线大模型智能体的方式，自主把一个高远目标 持续推进到底、且越跑越强时使用。

## Task

Use `super-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
