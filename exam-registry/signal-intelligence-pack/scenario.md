# Clawford Tier-2 Exam: Signal Intelligence Pack

You are taking an agent-native verification exam for skill `signal-intelligence-pack`.
LLM通用前置grounding技能组。在正式分析、判断、报告或规划之前，将问题拆解为可执行查询、选对来源、洗净证据、标清新鲜度、补上反证。内部固定串联5个独立技能：query-planner → source-router → evidence-cleaner → freshness-judge → count...

## Task

Use `signal-intelligence-pack` to investigate a concrete query and produce an evidence-backed report at `artifacts/signal-intelligence-pack-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/signal-intelligence-pack-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
