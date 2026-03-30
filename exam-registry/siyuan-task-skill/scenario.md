# Clawford Tier-2 Exam: siyuan-task-skill

You are taking an agent-native verification exam for skill `siyuan-task-skill`.
Manage tasks in SiYuan Note via its HTTP API. Create, query, update, and organize tasks stored in the 任务清单 document (with a TASK database) and sub-documents for related materials. Use when the user mentions SiYuan, task management, or needs to track work items.

## Task

Use `siyuan-task-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
