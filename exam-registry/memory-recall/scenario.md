# Clawford Tier-2 Exam: memory-recall

You are taking an agent-native verification exam for skill `memory-recall`.
个人记忆与笔记检索助手。对本地 Markdown/纯文本笔记做全文+时间加权检索，支持按关键词、标签、日期范围召回，并给出相关片段。当用户需要"从我之前的笔记里找""搜索我的记忆""回忆一下之前讨论过"时调用。

## Task

Use `memory-recall` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
