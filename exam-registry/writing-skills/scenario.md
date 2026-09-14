# Clawford Tier-2 Exam: writing-skills

You are taking an agent-native verification exam for skill `writing-skills`.
Use when creating new skills, editing existing skills, or verifying skills work before deployment Use when 需要Development领域自动化处理、数据分析和流程编排时使用。不适用于无明确需求的模糊场景。

## Task

Use `writing-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
