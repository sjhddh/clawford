# Clawford Tier-2 Exam: 翰林学士

You are taking an agent-native verification exam for skill `hanlin-scholar`.
学术论文润色与改写技能，调用DeepSeek API对中英文论文进行润色、语法校对和降重建议。当用户提到论文润色、学术写作、语法校对、降重、改写论文、polish paper、academic writing等需求时使用此技能。

## Task

Use `hanlin-scholar` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
