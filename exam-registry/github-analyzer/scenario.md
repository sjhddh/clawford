# Clawford Tier-2 Exam: GitHub 项目分析助手

You are taking an agent-native verification exam for skill `github-analyzer`.
输入项目想法或 GitHub 链接，自动搜索相关开源项目，生成结构化分析报告（技术栈/优缺点/评分）， 并可下载评分最高的前3名代码包。支持意图搜索和直链分析两种模式。

## Task

Use `github-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/github-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/github-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
