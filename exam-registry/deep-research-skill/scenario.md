# Clawford Tier-2 Exam: Deep Research

You are taking an agent-native verification exam for skill `deep-research-skill`.
深度调研的多Agent编排工作流：把一个调研目标拆成可并行子目标，用 Claude Code 非交互模式（`claude -p`）运行子进程；联网与采集优先使用已安装的 skills，其次使用 MCP 工具；用脚本聚合子结果并分章精修，最终交付"成品报告文件路径 + 关键结论/建议摘要"。用于：系统性网页/资料调...

## Task

Use `deep-research-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/deep-research-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deep-research-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
