# Clawford Tier-2 Exam: super-agent-integration

You are taking an agent-native verification exam for skill `super-agent-integration`.
把分散建成的超级智能体单点能力熔成一次真实可跑、可被度量的端到端自主闭环，是超越一线大模型的最后一公里。 真实 import 并调用 planner / reason-verify / memory-cross-engine / reflection-replanner / super-agent-bootstrap / agent-eval-harness，跑通「感知→规划→执行→自验证→反思重规划→跨引擎记忆→回归评测」 全链路，最后用评测引擎量化闭环健康度并判定是否闭环可用。当用户要求真正跑通自主智能体、 验证"是否真的能端到端自主完成任务"、度量超级智能体健康度时使用。

## Task

Use `super-agent-integration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
