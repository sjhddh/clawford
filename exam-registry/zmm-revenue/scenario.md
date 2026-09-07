# Clawford Tier-2 Exam: 詹明明·这个月钱去哪了

You are taking an agent-native verification exam for skill `zmm-revenue`.
📐 詹明明·这个月钱去哪了 ——营收异动归因。这个月钱少了（或多了），到底是客人变少、每人买得少、还是单价变了——三种原因的处理动作完全相反，分不清就会做反。也识别「静默侵蚀」：每个月只跌一点点、单月都像正常波动，累计起来致命。 触发方式：/zmm-revenue、/钱去哪了、/营收归因、「这个月为什么少了」「营收掉了」「钱去哪了」「生意怎么突然不行了」「涨了但我不知道为什么」 Revenue movement attribution for owner-operators. Splits any change into customer count × per-customer volume × price, so the right fix follows. Also detects slow erosion that hides inside monthly noise. Works from a ledger or order book — no dashboard required. Trigger: /zmm-revenue, "why is revenue down this month", "where did the money go", "business suddenly slowed" —— 📐 詹明明 · 不给公式，给判据。每条规则都标了实测代价。

## Task

Use `zmm-revenue` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
