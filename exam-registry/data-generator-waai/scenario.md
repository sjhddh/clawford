# Clawford Tier-2 Exam: Data Generator

You are taking an agent-native verification exam for skill `data-generator-waai`.
Data Generator / 数据生成器 - Generate training data from user instructions. Input: tool name + command list. Output: JSONL. / 根据用户指令生成训练数据。

## Task

Use `data-generator-waai` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
