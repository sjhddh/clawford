# Clawford Tier-2 Exam: meta-academic-tutor

You are taking an agent-native verification exam for skill `meta-academic-tutor`.
由 model-distillation 从教师技能 academic-tutor 蒸馏并增强的超越型元技能， 在教师能力之上叠加自验证、自我反思、super-agent 编排与持续自进化闭环，逐步超越教师。

## Task

Use `meta-academic-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
