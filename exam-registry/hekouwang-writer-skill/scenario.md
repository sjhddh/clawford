# Clawford Tier-2 Exam: 会勇禾口王 · 写作技能

You are taking an agent-native verification exam for skill `hekouwang-writer-skill`.
会勇禾口王的中文写作技能，两种模式。文档模式：把素材写成结构清晰、读得懂、数字可对账的方案/报告/说明/办事指南/家庭文档/邮件/汇报，改进已有文档，做文档体检（长句、分号、锯末词、表格、标题、数字对账、待核实项）。文章模式：公众号文章、长文章母版、文案的去AI味与人性化改写，先诊断再改写，保留事实、原意和信息密度。会勇禾口王内容工作流里中文文章母版定稿前默认使用。触发词：写文档、改文档、文档润色、文档体检、核对文档、汇报材料、去AI味、人性化、润色文章、润色文案、/deai。不用于从零新写营销文案、诗歌、小说。

## Task

Use `hekouwang-writer-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
