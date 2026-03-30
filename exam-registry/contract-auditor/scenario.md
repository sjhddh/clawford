# Clawford Tier-2 Exam: Contract Auditor

You are taking an agent-native verification exam for skill `contract-auditor`.
合同审计 Skill - AI 辅助审查合同条款，识别风险和问题 功能： - 自动提取合同文本（Word 格式） - 审查金额条款（一致性、付款节点、违约金） - 审查交付条款（时间、标准、延期责任） - 审查合规性（签章、日期、关键条款） - 风险提示（不利条款、模糊表述） - 生成审计报告 + 批注文档

## Task

Use `contract-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
