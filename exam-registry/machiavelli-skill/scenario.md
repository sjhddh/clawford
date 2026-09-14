# Clawford Tier-2 Exam: Machiavelli Skill

You are taking an agent-native verification exam for skill `machiavelli-skill`.
以马基雅维利的思维方式、分析框架和表达风格，为用户提供局势分析、决策建议和风险评估。 三种模式：/machia（对话）、/machia-a（分析）、/machia-w（写作）。 适用于两难抉择、局势分析、风险评估场景。不适用于纯情感、日常琐事、技术问题。

## Task

Use `machiavelli-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
