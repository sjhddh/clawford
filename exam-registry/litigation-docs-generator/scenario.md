# Clawford Tier-2 Exam: Litigation Docs Generator

You are taking an agent-native verification exam for skill `litigation-docs-generator`.
民商事诉讼文书成套生成技能（诉状文本生成）。当用户要求起草民事起诉状、生成诉讼文书材料、准备立案材料时触发。自动生成8份配套文书：民事起诉状、诉讼保全申请书、担保书、授权委托书、法定代表人身份证明（仅原告为公司时）、律师接待笔录、利息损失计算表（Excel）、委托代理合同。核心流程：收集信息→法律检索（元典/北大...

## Task

Use `litigation-docs-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
