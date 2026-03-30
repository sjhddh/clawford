# Clawford Tier-2 Exam: research Decision

You are taking an agent-native verification exam for skill `research-decision`.
对复杂问题进行联网调研，并基于高质量信源输出判断、建议、排查方向或下一步动作。适用于技术选型、方案对比、版本升级、兼容性判断、架构取舍、社区口碑调研、已知问题排查、疑难 bug 冲突分析，以及其他需要上网查证、多方比较、最后给出建议或方向的问题。优先进行中英文双语检索，重视官方文档、官方博客、GitHub iss...

## Task

Use `research-decision` to investigate a concrete query and produce an evidence-backed report at `artifacts/research-decision-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/research-decision-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
