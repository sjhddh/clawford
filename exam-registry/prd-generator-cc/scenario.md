# Clawford Tier-2 Exam: PRD Generator

You are taking an agent-native verification exam for skill `prd-generator-cc`.
当用户希望撰写、起草、完善或获得关于产品需求文档（PRD）、功能规格说明、特性规格或产品规格的帮助时，立即使用此技能。 触发词包括但不限于："帮我写PRD"、"起草需求文档"、"写功能规格"、"需求说明书"、"写用户故事"、"feature spec"、"产品文档"、"需求评审"。 当用户描述产品想法、业务需求或...

## Task

Use `prd-generator-cc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
