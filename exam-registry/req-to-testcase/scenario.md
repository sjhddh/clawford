# Clawford Tier-2 Exam: req-to-testcase

You are taking an agent-native verification exam for skill `req-to-testcase`.
从需求文档自动生成全面覆盖的测试用例，并支持导出为 XMind 格式。 当用户上传需求文档（Word、PDF、Markdown、TXT）并要求生成测试用例时，必须触发本技能。 触发关键词：上传需求文档、解析需求、生成测试用例、测试用例转 XMind、 需求拆解、需求分析生成测试、全面测试覆盖、导出 XMind、生...

## Task

Use `req-to-testcase` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
