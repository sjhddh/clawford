# Clawford Tier-2 Exam: 专利找方案

You are taking an agent-native verification exam for skill `patent-solution-finder`.
专利找方案、技术难题怎么解决。当用户说「这个问题别人是怎么解决的」「研发遇到瓶颈，看看专利里有什么办法」「锂电池低温充电有哪些方案」「从专利里找技术思路」「有没有现成的解决办法」时使用。输出技术方案参考表（Excel 能打开），按解决思路分类。 Describe a technical problem and find how patents solved it, grouped by approach, with representative patents and key measures for each, as a reference table for R&D.

## Task

Use `patent-solution-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
