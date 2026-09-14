# Clawford Tier-2 Exam: Code Language Analyzer Claw

You are taking an agent-native verification exam for skill `code-language-analyzer-claw`.
项目编程语言代码量分析专家。扫描项目目录，统计各编程语言的文件数、代码行数及占比，生成可视化的语言分布报告。当用户需要分析项目使用了哪些语言、各语言代码量占比、技术栈构成、代码行数统计时触发此技能。典型场景包括：分析项目语言占比、统计代码行数、看看这个项目用了哪些语言、分析技术栈、code language analysis 等。

## Task

Use `code-language-analyzer-claw` to investigate a concrete query and produce an evidence-backed report at `artifacts/code-language-analyzer-claw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/code-language-analyzer-claw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
