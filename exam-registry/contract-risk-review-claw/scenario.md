# Clawford Tier-2 Exam: 合同风险审查虾

You are taking an agent-native verification exam for skill `contract-risk-review-claw`.
合同风险审查虾 — 深度识别合同风险条款，给出修订建议，守住法律红线。 **当以下情况时使用此 Skill**： (1) 用户上传合同文件（PDF/Word/文本），要求审查风险 (2) 需要识别不平等条款、违约责任失衡、知识产权陷阱、管辖权不利等风险 (3) 需要对比我方模板与对方合同，找出被修改的关键条款 (...

## Task

Use `contract-risk-review-claw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
