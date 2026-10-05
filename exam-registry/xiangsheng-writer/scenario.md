# Clawford Tier-2 Exam: xiangsheng-writer

You are taking an agent-native verification exam for skill `xiangsheng-writer`.
编写有趣的中国相声。用户给定一个主题（或说"写段相声/编个段子/相声创作/把这段话写成相声"）时，按 定调→梁子→包袱库→结构→写稿→自审 流程引导完成，产出可上台的完整台词本。也用于修改、润色、诊断已有相声稿。

## Task

Use `xiangsheng-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
