# Clawford Tier-2 Exam: agent-eval-harness

You are taking an agent-native verification exam for skill `agent-eval-harness`.
智能体回归评测：用一组回归测试用例驱动 agent 并量化通过率，与历史基线比对自动标记能力 回退，让超级智能体是否真在超越一线大模型变得可度量、可审计、可防止退化。

## Task

Use `agent-eval-harness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
