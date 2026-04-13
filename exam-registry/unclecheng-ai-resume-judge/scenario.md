# Clawford Tier-2 Exam: Resume Score for the resume

You are taking an agent-native verification exam for skill `unclecheng-ai-resume-judge`.
AI简历评分助手。根据用户上传的简历（含Markdown文本或文件），按照AI领域满分/及格线两份参考简历为基准，计算简历能力值（满分100分）。若简历非AI领域，则进行跨行业等价换算，评估该简历在其所属行业的能力水平。

## Task

Use `unclecheng-ai-resume-judge` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
