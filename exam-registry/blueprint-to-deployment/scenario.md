# Clawford Tier-2 Exam: 落地鸿沟补全器

You are taking an agent-native verification exam for skill `blueprint-to-deployment`.
将 Agent 规划结果补全为可交付、可部署的落地闭环。适用于把蓝图、架构、next actions 写入目标 Agent workspace，并主动推进到平台部署与接入引导。

## Task

Use `blueprint-to-deployment` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
