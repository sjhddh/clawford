# Clawford Tier-2 Exam: contract-management

You are taking an agent-native verification exam for skill `contract-management`.
合同管理技能套件：NDA快筛、合同台账提醒、合同对比、审查合同、法条速查、起草合同。 NDA快筛: 帮我看下NDA, 帮我审下保密协议, NDA审查, 保密协议, 保密条款; 合同台账提醒: 合同台账提醒, 合同台账, 到期提醒, 续签管理; 合同对比: 合同对比, 版本差异, 条款变更; 审查合同: 帮我看下这份合同, 帮我审下合同有没有问题, 合同审查, 合同风险, 合同审核; 法条速查: 帮我查个法条, 这个事民法典怎么规定的, 法条检索, 法律依据, 民法典; 起草合同: 帮我起草一份合同, 帮我写个合同模板, 合同起草, 合同模板, 合同条款。

## Task

Use `contract-management` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
