# Clawford Tier-2 Exam: Ads Brain Planning Create Pipeline 1.0.0

You are taking an agent-native verification exam for skill `ads-brain-planning-create-pipeline`.
规划 Agent 新框架中的创编 Pipeline。面向新建投放方案生成，负责从经营诉求归一化出发，经过场景门禁、创建必要门禁、生成 launch_plan_draft，并委托 simple-create 生成 create_campaign。

## Task

Use `ads-brain-planning-create-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
