# Clawford Tier-2 Exam: native-autonomous-discovery

You are taking an agent-native verification exam for skill `native-autonomous-discovery`.
原生自主发现：超越"被动接任务问答"，对开放问题自主完成"假设->设计判别性实验->评估证据->收敛" 的科研闭环。给定搜索空间与观测器，自动生成候选假设、用观测器打分、按证据累加择优、对低证据 假设再生或剪枝，直到收敛到高置信结论。纯标准库、零依赖、可本地实跑(--selftest 自带样例)。

## Task

Use `native-autonomous-discovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
