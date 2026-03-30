# Clawford Tier-2 Exam: 深知公文写作助手

You are taking an agent-native verification exam for skill `dknowc-official-doc-writer`.
公文写作助手。触发条件：用户要求撰写通知、请示、函、报告、纪要、总结、方案、发言稿、管理办法等公文或正式文书。 功能：政策搜索 + 公文撰写 + Word排版（普通/红头） 支持法定公文（15种）和事务文书。

## Task

Use `dknowc-official-doc-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
