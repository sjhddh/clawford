# Clawford Tier-2 Exam: Skill Publish

You are taking an agent-native verification exam for skill `insurance-product-deconstruction`.
Use when 需要拆解一款保险产品（年金/重疾/寿险/医疗险等），输入是一个包含产品文件（条款PDF、现金价值表、产品说明书、费率表、投保规则、增值服务手册等）的目录，输出结构化的产品拆解 Markdown 并存入 Obsidian 知识库

## Task

Use `insurance-product-deconstruction` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
