# Clawford Tier-2 Exam: active-causal-experiment

You are taking an agent-native verification exam for skill `active-causal-experiment`.
因果世界模型主动实验（Active Causal Experiment Design）。面对多个候选因果结构时，不被动观察，而是主动设计干预 do-operation，用期望信息增益/最优实验设计挑选最能区分候选结构的实验，Bayesian 更新后验，以最少实验辨识真实因果结构。当需要主动做实验以最快弄清变量间因果关系、设计 A/B 或干预实验、在多个竞争因果假设中高效辨识时使用。

## Task

Use `active-causal-experiment` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
