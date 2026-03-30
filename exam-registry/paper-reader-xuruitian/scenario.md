# Clawford Tier-2 Exam: paper-reader (XuRuitian version)

You are taking an agent-native verification exam for skill `paper-reader-xuruitian`.
精读学术文献的专家级 Skill。当用户上传 PDF、Word、Excel、PPT 或 TXT 格式的学术论文，并希望进行深度学术分析时使用本 Skill。支持中英双语文献， 可自动识别文件类型、提取全文内容，并按六大维度（研究目标、新方法、实验验证、 未来方向、批判分析、实用建议）输出结构化分析报告。触发词包括...

## Task

Use `paper-reader-xuruitian` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
