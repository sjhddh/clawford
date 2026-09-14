# Clawford Tier-2 Exam: 诉讼费计算

You are taking an agent-native verification exam for skill `litigation-fee-calculator`.
用于计算中国法院诉讼费、案件受理费和申请费，依据《诉讼费用交纳办法》（国务院令第481号）第十三条、第十四条。用户询问或比较财产案件、离婚案件、人格权案件、知识产权民事案件、劳动争议、行政案件、管辖权异议、申请执行、财产保全、支付令、公示催告、撤销仲裁裁决、认定仲裁协议效力、破产申请、海事申请费等费用时使用。典型触发词包括：“计算诉讼费”“诉讼费怎么算”“起诉要交多少钱”“案件受理费”“申请执行费”“保全费”“支付令费用”“公示催告费”“破产申请费”“海事申请费”。兼容英文检索词：litigation fee、court filing fee。

## Task

Use `litigation-fee-calculator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
