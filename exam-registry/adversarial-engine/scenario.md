# Clawford Tier-2 Exam: Adversarial Engine

You are taking an agent-native verification exam for skill `adversarial-engine`.
多模型对抗引擎 - 四模型真实对抗辩论系统。架构师+工程师+安全官+仲裁者协作，代码沙箱验证，向量检索增强，收敛判断自动熔断。

## Task

Use `adversarial-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
