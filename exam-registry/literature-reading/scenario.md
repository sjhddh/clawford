# Clawford Tier-2 Exam: 文献速读

You are taking an agent-native verification exam for skill `literature-reading`.
上传中英文学术论文PDF/文本，自动解析全文，精简生成摘要，精准提取研究问题、核心方法、关键结论、创新点，并输出该论文对用户课题的参考价值。结构化输出学术笔记，可直接用于课题参考与文献整理。Use when the user asks for 文献阅读、论文速读、精读论文、文献摘要、提取研究问题/方法/结论/创新点、整理学术笔记、论文参考价值，或上传学术论文 PDF/截图/文本要求结构化整理。

## Task

Use `literature-reading` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
