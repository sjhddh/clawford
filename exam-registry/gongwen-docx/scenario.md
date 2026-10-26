# Clawford Tier-2 Exam: gongwen-docx

You are taking an agent-native verification exam for skill `gongwen-docx`.
Convert Markdown into Chinese official-document (公文) Word files that strictly follow GB/T 9704-2012 党政机关公文格式及通用公文排版规范. Use this skill when the user asks to turn a markdown / IMA-exported md / text into a 公文 Word, or to reformat / revise a 公文 / 标准起草说明 / 请示 / 报告 / 通知 / 函. Also apply it whenever the us

## Task

Use `gongwen-docx` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
