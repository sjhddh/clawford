# Clawford Tier-2 Exam: Prompt Alchemist-提示词炼金术

You are taking an agent-native verification exam for skill `prompt-alchemist`.
蒸馏四位顶级提示词工程师（Riley Goodside、涂津豪/推广CO-STAR、Sander Schulhoff、李继刚）的方法论，融合为"四元蒸馏框架"，自动优化用户提示词，提升AI回答质量。 ## 激活方式 - "帮我优化提示词""改进我的Prompt""让AI回答更好" - "提示词蒸馏""prompt...

## Task

Use `prompt-alchemist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
