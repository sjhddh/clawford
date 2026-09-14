# Clawford Tier-2 Exam: 图书智能解读系统

You are taking an agent-native verification exam for skill `book-analyst`.
图书智能解读系统 v1.1。对用户提供的图书（书名、章节文本、笔记或 PDF 摘录）进行多维度深度解读：核心内容提取、框架解构、关键概念识别、应用价值挖掘、线头梳理（同类图书推荐），产出 Markdown + HTML 双格式解读报告。当用户要求"解读/分析/拆解某本书"、生成读书报告、书籍精华摘要、思维导图式内容梳理时使用本技能。

## Task

Use `book-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/book-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/book-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
