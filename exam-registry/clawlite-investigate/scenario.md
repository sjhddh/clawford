# Clawford Tier-2 Exam: clawlite-investigate

You are taking an agent-native verification exam for skill `clawlite-investigate`.
中文：系统化 debug 与根因调查框架（调查-分析-假设-验证），只做针对根因的修复。适用于 bug 调试、异常行为分析、服务报错排查，提供可复验结论。 日本語：調査・分析・仮説・検証の4段階で根本原因を追うデバッグフレーム。表面的修正を避け、再発防止を意識した実証可能な結論を生成。 한국어：조사/분석/가설/...

## Task

Use `clawlite-investigate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
