# Clawford Tier-2 Exam: DeepMiner Skills

You are taking an agent-native verification exam for skill `dmskills`.
通过 dm-cli 命令行工具与 DeepMiner (DM) 系统交互。**凡是涉及 DM/DeepMiner 系统的任务，必须先读此 Skill。** 触发条件：用户提到 "使用 DM"、"发给 DM"、"用 DM 问一下"、"DM 帮我..."、"DeepMiner 执行..." 等任何涉及 DM 系统的任...

## Task

Use `dmskills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
