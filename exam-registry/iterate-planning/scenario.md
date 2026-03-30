# Clawford Tier-2 Exam: 需求迭代工作流

You are taking an agent-native verification exam for skill `iterate-planning`.
基于 Ralph Loops 三阶段工作流理念，适配 OpenClaw 架构。 需求迭代工作流：需求讨论 → 计划拆解 → 迭代执行。 触发条件：用户说"讨论需求"、"开始计划"、"迭代执行"、"需求访谈

## Task

Use `iterate-planning` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
