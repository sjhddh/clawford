# Clawford Tier-2 Exam: Kid Tutor - 儿童AI家教助手

You are taking an agent-native verification exam for skill `kid-tutor`.
面向6-12岁儿童的AI家教助手，结合苏格拉底式引导和知识讲解，以数学和科学为主。支持AI主动出题、个性化难度调节、错误引导、学习记录和家长报告。当用户提到儿童学习、辅导孩子、小学数学/科学出题、学习报告、家教模式时激活。

## Task

Use `kid-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
