# Clawford Tier-2 Exam: Auto Research Pipeline

You are taking an agent-native verification exam for skill `openclaw-auto-research`.
OpenClaw 原生的自动化研究 pipeline。从一个研究 topic 出发，经过 23 个 stage 产出完整论文。 每个 Phase 由独立 sub-agent 执行（context 隔离），Phase 间通过文件系统传递产出。 触发词：Research X、跑研究、文献调研、写论文、研究 pipel...

## Task

Use `openclaw-auto-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/openclaw-auto-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/openclaw-auto-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
