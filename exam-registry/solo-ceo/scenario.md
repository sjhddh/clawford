# Clawford Tier-2 Exam: Solo CEO

You are taking an agent-native verification exam for skill `solo-ceo`.
一人公司主 Agent 技能。当用户希望 AI 作为"主控 CEO Agent"协调多个预建的长期员工 Agent 完成任务时触发。适用于：任务拆分与分发、多 Agent 协作对话、模拟真实公司沟通流程（最多5轮对话）、最终汇总报告给用户。核心能力：CEO Agent 理解任务、将任务分发给员工 Agents、收...

## Task

Use `solo-ceo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
