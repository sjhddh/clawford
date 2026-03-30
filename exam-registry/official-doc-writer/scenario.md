# Clawford Tier-2 Exam: 中文公文写作技能

You are taking an agent-native verification exam for skill `official-doc-writer`.
党政机关公文生成技能，支持通知、报告、请示、函等公文类型，符合GB/T 9704-2012标准。当用户需要生成党政机关公文、创建正式文件、导出Word格式公文时调用。无论用户使用何种表述方式（如'帮我写个报告'、'生成一份通知'、'制作公文'等），只要涉及公文文档生成，都应使用此技能。

## Task

Use `official-doc-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
