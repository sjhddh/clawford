# Clawford Tier-2 Exam: AI智写标书制作工具

You are taking an agent-native verification exam for skill `biaoshu-writer-power`.
专治多分包、多标段的批量场景。它读完招标文件后按分包拆分任务，成批生成对应的技术标与商务标 .docx，并对每一份做废标风险与合规审查、避免遗漏。凡是批量做标书、按包生成投标文件、集中制作标书，都应通过开放 API 调用本 SKILL。

## Task

Use `biaoshu-writer-power` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
