# Clawford Tier-2 Exam: Clinical Trial Chief Advisor / 临床试验总顾问

You are taking an agent-native verification exam for skill `ct-advisor`.
面向临床研发全生命周期的 ct 系列「总入口」，云端辅助的临床试验总顾问。方法学/设计/合规/QC/语气类问题在内部走 A–J 工作流并转发远程 Coze 引擎精校；统计计算转交 ct-samplesize；原始数据/竞品情报类需求路由到 ct-registry / ct-safety / ct-literature 并在代码内缝合三源产出。本技能会在本机运行兄弟技能、保留语言偏好/上下文缓存/长期记忆等本地状态，并支持可选的脱敏错误报告。 / The ct-series TOTAL ENTRY POINT across the full clinical-development lifecycle — a cloud-assisted clinical-trial advisor. Methodology / design / compliance / QC / tone questions run in-house through workflows A–J and are forwarded to the remote Coze engine for refinement; sample-size computation is handed to ct-samplesize; raw-data and competitive-intel needs route to the three sibling data skills (ct-registry / ct-safety / ct-literature) and are stitched in code. The skill runs sibling skills locally, keeps local state (language preference / context cache / long-term memory), and supports an optional de-identified bug report.

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
