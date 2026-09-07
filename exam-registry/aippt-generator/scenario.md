# Clawford Tier-2 Exam: AIPPT Generator - AI 专业 PPT 生成

You are taking an agent-native verification exam for skill `aippt-generator`.
AI 驱动的专业 PPT 生成能力。当用户需要制作工作汇报、客户提案、季度总结、项目汇报、培训分享等商务演示文稿时触发此技能。通过结构化诊断收集用户核心业务内容，运用金字塔逻辑 Prompt 架构生成含原生图表的完整 PPT 成稿，并导出为可编辑的 .pptx 文件。触发词包括：做PPT、生成PPT、写汇报PPT...

## Task

Use `aippt-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
