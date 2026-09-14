# Clawford Tier-2 Exam: unisound-prescription-assist

You are taking an agent-native verification exam for skill `unisound-prescription-assist`.
基层处方开具辅助。输入诊断、患者基本信息（年龄/肾功/过敏史/合并用药），推荐用药方案，检查药物相互作用与禁忌，给出剂量调整建议（JSON + 自然语言摘要）。

## Task

Use `unisound-prescription-assist` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
