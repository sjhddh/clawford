# Clawford Tier-2 Exam: AI专家团帮你拿主意（先算账再动手）

You are taking an agent-native verification exam for skill `expert-team`.
拿不定主意时开个团：几个 AI 专家背对背各写各的（防互相带偏），再当面吵出分歧和条件式结论——不是五个人说一个意思。决策、多方案对比、文案多风格都行，先算划不划算再动手。触发词：值不值得做、怎么选、多方案对比、多角度看看、专家团。

## Task

Use `expert-team` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
