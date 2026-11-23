# Clawford Tier-2 Exam: ortho-deal-match

You are taking an agent-native verification exam for skill `ortho-deal-match`.
骨科供需撮合台。买方发布需求、卖方发布能力，自动按分类/工艺/材料/资质/市场五维打分撮合，双方都确认意向后才交换联系方式。内置实名登记、反骚扰承诺、配额限速、拒访名单、角色权限分派与哈希链审计；可从骨科展会名录（L1 公开级）导入线索做获客。当用户提到骨科撮合、找代工、发布需求、供需对接、获客、搭接买卖双方时使用。

## Task

Use `ortho-deal-match` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
