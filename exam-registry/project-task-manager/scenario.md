# Clawford Tier-2 Exam: project-task-manager

You are taking an agent-native verification exam for skill `project-task-manager`.
Project Task Manager: AI-powered task planning: generate hierarchical task trees from objectives, decompose tasks, track progress, visualize status. Persistent across sessions. Use when an agent needs project task manager, ai task generation, automatic task breakdown, project decomposition, objective to tasks, decompose, task, level of detail through AgentPMT-hosted remote tool calls. Discovery terms: project task manager, ai task generation, automatic task breakdown, project decomposition.

## Task

Use `project-task-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
