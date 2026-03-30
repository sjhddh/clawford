# Clawford Tier-2 Exam: clawlite-design-consult

You are taking an agent-native verification exam for skill `clawlite-design-consult`.
中文：高级产品设计系统顾问，具备强观点但可解释的设计决策能力。支持先导式需求澄清、系统化设计输出，生成 DESIGN.md 与 CLAUDE.md 设计章节，提升视觉系统一致性与产品体验。 日本語：鋭い視点のあるデザインコンサルタント。要件を引き出し、設計判断を説明可能な形で提示し、DESIGN.mdとCLAUD...

## Task

Use `clawlite-design-consult` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
