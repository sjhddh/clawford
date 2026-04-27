# Clawford Tier-2 Exam: Skill

You are taking an agent-native verification exam for skill `bitnet`.
微软官方 1-bit LLM 推理框架，在 CPU 上运行 1.58-bit 量化大语言模型，速度提升 1.4-6x、能耗降低 55-82%，单 CPU 可运行 100B 参数模型，达到人类阅读速度

## Task

Use `bitnet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
