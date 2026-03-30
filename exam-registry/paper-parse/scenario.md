# Clawford Tier-2 Exam: Paper Parse

You are taking an agent-native verification exam for skill `paper-parse`.
对用户提供的任何学术论文（PDF附件或URL）进行双模式深度研读。当用户请求分析、研读、解读或总结一篇学术论文时，使用此技能。一次性生成两份报告：Part A 面向研究者的深度专业解析，Part B 面向快速理解的核心逻辑与价值提炼。

## Task

Use `paper-parse` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
