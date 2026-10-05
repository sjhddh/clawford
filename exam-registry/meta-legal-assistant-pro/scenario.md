# Clawford Tier-2 Exam: meta-legal-assistant-pro

You are taking an agent-native verification exam for skill `meta-legal-assistant-pro`.
由 model-distillation 从教师技能 legal-assistant-pro 蒸馏并增强的超越型元技能。 蒸馏其中国法域八大模块(合同审查/劳动权益/消费维权/婚姻家庭/房产/借贷/网络权益/交通) 与四套工作流，叠加自验证、自我反思、super-agent 编排与持续自进化闭环， 并在安全边界(不出具意见/刑事必报警/群体找法援)上做对抗验证，逐步超越教师。

## Task

Use `meta-legal-assistant-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
