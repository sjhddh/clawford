# Clawford Tier-2 Exam: mx-业绩点评

You are taking an agent-native verification exam for skill `mx-stock-earnings-review`.
依托东方财富数据库，面向沪深京港美五大市场的上市公司/股票，生成业绩点评类输出（含财报分析、业绩解读）。 当用户明确提出业绩点评、财报分析、业绩解读需求，或出现「业绩点评」「财报点评」「业绩分析」「季报/半年报/年报点评」「财务分析」「盈利分析」「业绩解读」等表述时，应触发本 Skill。 用户点名具体公司/股票...

## Task

Use `mx-stock-earnings-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
