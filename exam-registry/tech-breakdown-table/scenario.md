# Clawford Tier-2 Exam: 技术分解表

You are taking an agent-native verification exam for skill `tech-breakdown-table`.
技术分解表、专利分析技术分解。当用户说「做专利分析要先拆技术分解表」「把这个技术拆成几个分支」「每个分支有多少专利」「专利导航项目的技术分解」「技术体系梳理」时使用。输出技术分解表（Excel 能打开），每个分支带关键词、检索式和专利数。 The first step of a patent landscape project. Breaks a technology into first- and second-level branches with keywords and queries, counts patents per branch, and outputs a ready-to-use table.

## Task

Use `tech-breakdown-table` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
