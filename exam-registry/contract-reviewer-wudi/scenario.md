# Clawford Tier-2 Exam: Contract Reviewer Wudi

You are taking an agent-native verification exam for skill `contract-reviewer-wudi`.
中文合同审核 Skill - 支持修订痕迹、批注气泡、清洁版生成与多轮迭代管理。覆盖41种合同类型、350+关键条款、229+常见风险、82个法律依据。核心输出为 Word Track Changes（修订痕迹）。

## Task

Use `contract-reviewer-wudi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
