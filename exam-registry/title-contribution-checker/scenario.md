# Clawford Tier-2 Exam: Title Contribution Checker - 标题贡献度检查

You are taking an agent-native verification exam for skill `title-contribution-checker`.
检查学术论文标题是否清晰传达了研究的核心理念和贡献。 用于：判断标题是否回答"研究了什么"、判断是否包含研究焦点、识别缺乏贡献的标题。 触发场景："检查标题贡献度"、"这个标题传达了什么研究贡献"、"标题是否有研究价值"。

## Task

Use `title-contribution-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
