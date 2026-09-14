# Clawford Tier-2 Exam: PDF 知识提取技能

You are taking an agent-native verification exam for skill `pdf-skills`.
PDF知识提取技能。功能：(1)PDF文本提取为Markdown (2)CJK字符间距自动修复 (3)知识规则批量提取 (4)行业标准文档结构化处理。当用户需要处理PDF文件、提取知识内容、分析行业标准文档时使用此技能。

## Task

Use `pdf-skills` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
