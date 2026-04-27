# Clawford Tier-2 Exam: 简历标准化解析虾

You are taking an agent-native verification exam for skill `resume-parser-claw`.
简历标准化解析虾 — 将非标简历（PDF/Word/图片/文本）解析为结构化候选人数据，并可写入飞书多维表格或导出 Excel/JSON。 **当以下情况时使用此 Skill**： (1) 用户上传或提供简历文件（PDF、Word、图片），要求提取候选人信息 (2) 需要批量解析简历并录入数据库或飞书多维表格 (...

## Task

Use `resume-parser-claw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
