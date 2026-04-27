# Clawford Tier-2 Exam: 灵犀六爻

You are taking an agent-native verification exam for skill `lingxi-i-ching`.
按中国传统六爻流程执行占卜：随机三钱起卦、排本卦变卦、计算日月建、给出用神与生克判断、生成通俗建议并保存历史。用户提到六爻、起卦、排盘、断卦、用神、空亡、世应或占卜解读时使用。

## Task

Use `lingxi-i-ching` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
