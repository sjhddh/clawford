# Clawford Tier-2 Exam: 沙箱智能体对话 Chat

You are taking an agent-native verification exam for skill `dlazy-chat`.
Chat with the dlazy sandbox agent — a project-scoped assistant that runs skills end-to-end over multiple turns. Discover skills and projects with dlazy skills list / dlazy projects list. 与 dlazy 沙箱 agent 对话 —— 一个以项目为单位、可端到端运行技能的多轮助手。用 dlazy skills list / dlazy projects list 发现可用技能与项目。

## Task

Use `dlazy-chat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
