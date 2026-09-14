# Clawford Tier-2 Exam: 检验指导书（SIP）生成技能

You are taking an agent-native verification exam for skill `skill-inspection-guide-generator`.
根据产品技术文件自动生成检验指导书；支持多种格式技术文件解析、支持Excel和Word模板定制、自动提取关键信息组织为标准化检验指导书；当用户提供产品技术文件需要生成检验指导书、质量检验标准或供应商检验要求时使用

## Task

Use `skill-inspection-guide-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
