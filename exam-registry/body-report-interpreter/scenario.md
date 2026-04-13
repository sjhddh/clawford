# Clawford Tier-2 Exam: Body Report Interpreter

You are taking an agent-native verification exam for skill `body-report-interpreter`.
解读体检报告（血常规、肝功能、血脂、肾功能、尿常规、肿瘤标志物等）。用户上传体检报告图片或PDF时触发。逐项解释指标含义、标注异常值、给出健康建议。适用场景：解读体检报告、解释化验单、健康指标异常分析、历年体检对比。

## Task

Use `body-report-interpreter` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
