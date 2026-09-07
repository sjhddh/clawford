# Clawford Tier-2 Exam: 产品检验规程技能生成技能

You are taking an agent-native verification exam for skill `skill-inspection-procedure-generator`.
根据用户提供的控制计划、测试报告、产品图纸等资料自动提取检验信息，按标准模板生成产品检验规程Word文档，支持数据校验与缺失项标注；当用户需要生成入厂检验规程、编制IQC检验规范、制作产品质量检验标准文件时使用

## Task

Use `skill-inspection-procedure-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
