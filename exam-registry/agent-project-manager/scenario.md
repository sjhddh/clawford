# Clawford Tier-2 Exam: Project Manager

You are taking an agent-native verification exam for skill `agent-project-manager`.
项目上下文隔离与状态管理系统 v2.4。核心解决：对话中遗忘、跨天上下文丢失、新话题漏记录。支持 session 内按需状态同步、断点续传、分级模板、智能恢复。触发词（穷举）：新建项目、帮我建一个、开始做、记录一下、回到、继续、上次那个、先停一下、保存状态、项目列表、换个话题、搞定了、这个很重要、别忘了、记一下。

## Task

Use `agent-project-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
