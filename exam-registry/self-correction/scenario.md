# Clawford Tier-2 Exam: self-correction

You are taking an agent-native verification exam for skill `self-correction`.
模型自我检查与纠错技能。当用户表达反对意见或指出错误时触发，如"不对"、"你回答错了"、"不是这样"、"重新理解"、"等等"、"我说的不是这个意思"等表达。用于重新分析和优化用户原始意图，而非修改上一轮回答。

## Task

Use `self-correction` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
