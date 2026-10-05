# Clawford Tier-2 Exam: master-debate

You are taking an agent-native verification exam for skill `master-debate`.
Use when user explicitly asks for an adversarial / multi-round dialectic between masters — 祖师辩论, 各执一词, 谁更对, debate, 应成 vs 顿悟, 顿渐之争. Differs from /compare-masters (parallel single-round) by being adversarial multi-round via fresh-subagent orchestration. Topics 空有 / 禅净 / 性相 / 戒律 vs 内观 — trigger is adversarial framing: "禅净比较" → compare; "禅净辩论 / 谁更究竟" → here.

## Task

Use `master-debate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
