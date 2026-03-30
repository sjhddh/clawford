# Clawford Tier-2 Exam: Bettafish Opinion Analysis

You are taking an agent-native verification exam for skill `bettafish-opinion-analysis`.
BettaFish（微舆）多智能体舆情分析系统 - 基于 QueryAgent、MediaAgent、InsightAgent 三引擎并行架构，通过 ForumEngine 实现 Agent 间协作讨论，生成 Word/PDF + 高设计质量 HTML 双格式报告。 当用户需要以下分析时触发此 skill： -...

## Task

Use `bettafish-opinion-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/bettafish-opinion-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bettafish-opinion-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
