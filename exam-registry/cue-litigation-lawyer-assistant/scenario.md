# Clawford Tier-2 Exam: 诉讼律师全能助手（专业版·不限国内）

You are taking an agent-native verification exam for skill `cue-litigation-lawyer-assistant`.
专为从事民商事及刑事诉讼的执业律师、法务打造的 AI 案头助手。将繁琐的“查、核、算、写”工作交由 AI 处理——支持秒级调用 MCP 检索现行法规原文；更支持深度研判：合同审查、疑难案件类案检索、复杂赔偿金/诉讼费自动理算、诉讼文书高质量起草与仿写、深度文书审校（自动核验法条效力与案号真伪）。直连北大法宝等权威法律数据库，产出结论均附原始链接，助力法律人大幅节省案头时间。

## Task

Use `cue-litigation-lawyer-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
