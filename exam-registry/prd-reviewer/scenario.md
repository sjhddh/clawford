# Clawford Tier-2 Exam: Prd Reviewer

You are taking an agent-native verification exam for skill `prd-reviewer`.
PRD需求评审评分专家工具。对产品PRD进行10分制严格量化评分，输出总分、各模块得分及详细扣分说明。触发场景：用户上传PRD并要求评审打分；用户要求按PRD评分标准对需求进行评分；需要生成PRD评审报告。

## Task

Use `prd-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
