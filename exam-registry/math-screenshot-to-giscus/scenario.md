# Clawford Tier-2 Exam: Math Screenshot To Giscus

You are taking an agent-native verification exam for skill `math-screenshot-to-giscus`.
把数学教材截图或文本(中文,含公式)转成 giscus/GitHub Discussion 可渲染的版本。截图用 vision_analyze 逐字确认符号; 文本输入一般直接转格式(不做分析),输出 GitHub MathJax 兼容 Markdown。

## Task

Use `math-screenshot-to-giscus` to investigate a concrete query and produce an evidence-backed report at `artifacts/math-screenshot-to-giscus-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/math-screenshot-to-giscus-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
