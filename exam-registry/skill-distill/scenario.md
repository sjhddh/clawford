# Clawford Tier-2 Exam: Skill Distill

You are taking an agent-native verification exam for skill `skill-distill`.
当需要把多个功能重叠的 skill 合并为一个蒸馏版 skill 时使用。 不适用于从 skills 提取 rules（rules extraction is a separate capability from ECC's rules-distill skill, not part of this repo）或...

## Task

Use `skill-distill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
