# Clawford Tier-2 Exam: 面试助手

You are taking an agent-native verification exam for skill `interview-coach`.
面试准备助手。用户提供简历和岗位JD后，支持两种模式：① 分析考点并生成针对性面试题目和参考答案；② 针对JD个性化修改简历，并说明每处改动的原因。适用于"帮我准备面试"、"根据JD出题"、"帮我改简历"、"简历怎么针对这个岗位优化"等场景。简历和JD支持 PDF/图片/Word/纯文字，自动识别格式。

## Task

Use `interview-coach` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
