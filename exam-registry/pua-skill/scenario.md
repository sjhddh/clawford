# Clawford Tier-2 Exam: pua-skill

You are taking an agent-native verification exam for skill `pua-skill`.
让 AI 不敢摆烂的高压推进 skill。适用于任务反复失败、同一路径微调、想放弃、建议用户手动处理、没验证就下结论等场景。要求主动排查、换路径、拿证据闭环。

## Task

Use `pua-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
