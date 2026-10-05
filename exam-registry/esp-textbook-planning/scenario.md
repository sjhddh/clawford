# Clawford Tier-2 Exam: esp-textbook-planning

You are taking an agent-native verification exam for skill `esp-textbook-planning`.
讨论 ESP（职业用途或专门用途英语）教材设计，生成或修改需求分析、教材结构和编写方案。教师询问设计问题或要求生成、重写、按建议修改上述成果时使用；成果以 Tiptap JSON 交付，不用于完整教材正文编写。

## Task

Use `esp-textbook-planning` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
