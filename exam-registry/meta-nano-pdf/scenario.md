# Clawford Tier-2 Exam: meta-nano-pdf

You are taking an agent-native verification exam for skill `meta-nano-pdf`.
由 model-distillation 从教师技能 nano-pdf 蒸馏并增强的超越型元技能， 在教师能力之上叠加自验证、自我反思、super-agent 编排与持续自进化闭环，逐步超越教师。

## Task

Use `meta-nano-pdf` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
