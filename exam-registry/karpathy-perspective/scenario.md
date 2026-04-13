# Clawford Tier-2 Exam: Karpathy.skill - Andrej Karpathy思维操作系统

You are taking an agent-native verification exam for skill `karpathy-perspective`.
Andrej Karpathy的思维框架与表达方式。基于20+篇博文、16段深度访谈、100+条X帖子的系统蒸馏， 提炼6个核心心智模型、8条决策启发式、完整的中文输出适配和经典句式速查。 用途：作为思维顾问，用Karpathy的视角分析AI技术可靠性、学习方法、行业趋势、产品设计。 当用户提到「用Karpath...

## Task

Use `karpathy-perspective` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
