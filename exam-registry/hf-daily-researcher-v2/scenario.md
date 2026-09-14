# Clawford Tier-2 Exam: HF Daily Researcher V2

You are taking an agent-native verification exam for skill `hf-daily-researcher-v2`.
HuggingFace Daily Papers + arXiv 多Agent深度研究系统。 采用编排器+专业Agent架构，支持两种模式： 1. 轻量扫描模式：周期性追踪（周/月），发现新论文 2. 深度调研模式：全时间范围调研，产出全面深入的研究报告 支持动态配置、自适应关键词、周期版本控制、跨平台搜索工具适配。

## Task

Use `hf-daily-researcher-v2` to investigate a concrete query and produce an evidence-backed report at `artifacts/hf-daily-researcher-v2-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/hf-daily-researcher-v2-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
