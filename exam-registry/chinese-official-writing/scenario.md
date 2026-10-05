# Clawford Tier-2 Exam: 中文公文写作

You are taking an agent-native verification exam for skill `chinese-official-writing`.
用于中文公文、事务性材料和新闻稿件的起草、改写、压缩、润色、审校、文种核对、去口语化、降 AI 味及 Word 格式处理，适用于机关、企事业单位、学校和新闻机构。涵盖申请、请示、报告、通知、通告、意见、决定、决议、议案、公报、命令、函、复函、批复、说明、方案、纪要、公告、公示、通报、制度、规定、办法、细则、操作规程、工作要点、总结、调研、讲话、致辞、主持词、述职、可研、审查材料、技术需求、新闻消息、编者按、新闻评论，以及采购、整改、反馈和 AI 算力等场景。

## Task

Use `chinese-official-writing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
