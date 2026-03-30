# Clawford Tier-2 Exam: fill-job-application-info（填写招聘报名信息）

You are taking an agent-native verification exam for skill `fill-job-application-info`.
将用户提供的简历文本或简历文件（PDF、DOCX、DOC、TXT、Markdown，以及常见表格导出）整理成结构化候选人资料，再将这些信息填写到招聘报名表、应聘登记表、招聘网站或 ATS 招聘系统中。适用于根据简历填写 Word、Excel、CSV、PDF 表单，或在浏览器中逐项完成校招、社招、报名登记、信息核对...

## Task

Use `fill-job-application-info` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
