# Clawford Tier-2 Exam: 专利授权周期

You are taking an agent-native verification exam for skill `patent-grant-time`.
专利授权周期、发明专利多久授权。当用户说「发明专利多久能下来」「我们这个领域审查要多长时间」「高企 / 项目申报来得及吗」「某个代理机构的专利多久授权」「审查周期统计」时使用。输出授权周期统计表（Excel 能打开）。 How long does a Chinese invention patent take to grant? Uses recently granted patents in your field to compute filing-to-grant time, including median, fast and slow cases, for planning.

## Task

Use `patent-grant-time` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
