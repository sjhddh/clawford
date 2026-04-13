# Clawford Tier-2 Exam: Github Stars Analyzer

You are taking an agent-native verification exam for skill `yardor`.
抓取指定 GitHub 用户 Stars 下的所有项目，并生成标准化中文 Markdown 报告。当用户提到"分析 GitHub stars"、"导出收藏项目"、"汇总 GitHub 星标"、"生成 stars 报告"，或粘贴包含 ?tab=stars 的 GitHub 链接时，必须触发此技能。始终通过 bash...

## Task

Use `yardor` to investigate a concrete query and produce an evidence-backed report at `artifacts/yardor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/yardor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
