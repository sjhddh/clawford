# Clawford Tier-2 Exam: Prd Prototype Review

You are taking an agent-native verification exam for skill `prd-prototype-review`.
PRD与产品原型深度评审专家。读取需求PRD和产品原型文档，按多维度进行严苛但建设性的评审，输出结构化评审报告，并自动落地补丁到PRD和原型文档中。当用户要求"评审PRD/原型"、"review需求文档"、"检查原型完整性"、"补充异常分支/边界情况"、"评审报告"时触发。支持餐饮SaaS、B端后台、多角色权限系...

## Task

Use `prd-prototype-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
