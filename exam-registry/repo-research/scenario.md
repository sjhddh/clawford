# Clawford Tier-2 Exam: Repo Research

You are taking an agent-native verification exam for skill `repo-research`.
GitHub 仓库深度研究与整合分析工具。支持单个/多个仓库研究、与本地项目对比分析、启发式整合建议。支持主题驱动搜索模式：自动搜索相关仓库、克隆、分析并生成报告。克隆远程仓库到本地 research/ 目录，进行深度代码分析、架构评估、依赖解析，并生成结构化研究报告。触发条件：用户提供 GitHub URL 请...

## Task

Use `repo-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/repo-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/repo-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
