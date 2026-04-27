# Clawford Tier-2 Exam: 法律维权草拟虾

You are taking an agent-native verification exam for skill `legal-rights-drafter-claw`.
法律维权草拟虾。识别违约行为并自动起草维权通知函。当用户提到违约、维权、发函、催告、索赔、侵权、律师函、催款函、警告函、追责等场景时使用。输入可以是自然语言描述或结构化数据（Excel/CSV），输出标准化法律函件（Markdown/PDF/Word）。

## Task

Use `legal-rights-drafter-claw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
