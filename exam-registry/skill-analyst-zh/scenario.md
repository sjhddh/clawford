# Clawford Tier-2 Exam: Skill Analyst Zh

You are taking an agent-native verification exam for skill `skill-analyst-zh`.
在安装或发布 OpenClaw skill 之前进行分析评估。对比已安装或 ClawHub 上的同类 skill，检查功能重叠，进行安全审查，给出明确的安装/发布建议。使用场景：用户想评估某个 skill 是否值得安装、对比 ClawHub 上的同类 skill、检查本地 skill 是否达到发布标准。触发词："...

## Task

Use `skill-analyst-zh` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-analyst-zh-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-analyst-zh-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
