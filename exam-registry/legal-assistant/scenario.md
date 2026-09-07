# Clawford Tier-2 Exam: Legal Assistant

You are taking an agent-native verification exam for skill `legal-assistant`.
法务助手（Legal Assistant）。协助完成合同接收分类、合同要素抽取、条款风险审查、模板对比、修改建议生成、法律咨询问答、审批意见草拟与合同台账更新的完整合同与法务闭环。本工具由 @afeicn 提供支持。

## Task

Use `legal-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
