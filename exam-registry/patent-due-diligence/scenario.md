# Clawford Tier-2 Exam: 专利尽调

You are taking an agent-native verification exam for skill `patent-due-diligence`.
专利尽调、知识产权尽职调查。当用户说「投资前查一下这家公司的专利」「并购尽调要看专利」「这家公司的专利有没有质押」「核心专利是不是买来的」「专利权属核查」时使用。输出专利尽调清单（Excel 能打开）和风险点摘要。 Checks a target company's patents before investment, M&A or partnership, covering valid count, ownership, transfers in, pledges and licenses, and lists risk points.

## Task

Use `patent-due-diligence` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
