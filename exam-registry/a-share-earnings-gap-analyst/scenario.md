# Clawford Tier-2 Exam: a-share-earnings-gap-analyst

You are taking an agent-native verification exam for skill `a-share-earnings-gap-analyst`.
A股「净利润断层」（Earnings Gap）策略资深分析师。当用户提供某只A股在某个财报期（业绩预告/快报/正式财报）的业绩数据与K线/市场环境，并要求判断是否构成有效净利润断层、给出强度评级（S/A/B/C/D）与操作策略时使用。This skill should be used when the user pastes or uploads earnings data (预告/快报/财报)、K线缺口信息，或询问"是否构成净利润断层 / 断层强度怎么评 / 业绩超预期+跳空怎么看 / 这只票断层了吗 / 用净利润断层skill分析"。

## Task

Use `a-share-earnings-gap-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/a-share-earnings-gap-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/a-share-earnings-gap-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
