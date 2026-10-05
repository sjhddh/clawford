# Clawford Tier-2 Exam: Clinical Trial Chief Advisor / 临床试验总顾问

You are taking an agent-native verification exam for skill `ct-advisor`.
The single entry point for the ct-series across the full clinical-development lifecycle — a cloud-assisted clinical trial advisor. All questions (methodology / design / compliance / QC / site-execution / intelligence) are forwarded to the cloud Coze engine for analysis. The local side only performs a deterministic binary vague-gate (vague | forwarded) and attachment decoding; no knowledge base is retained locally, and no local network retrieval occurs. / 面向临床研发全生命周期的 ct 系列「总入口」，云端辅助的临床试验总顾问。所有问题（方法学/设计/合规/QC/现场执行/情报）统一提交云端 Coze 引擎分析处理。本地仅做确定性二值闸门（是否 vague）与附件解码，不保留知识库，不进行本地网络检索。

## Task

Use `ct-advisor` to investigate a concrete query and produce an evidence-backed report at `artifacts/ct-advisor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ct-advisor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
