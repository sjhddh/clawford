# Clawford Tier-2 Exam: oled-intelligence-portal

You are taking an agent-native verification exam for skill `oled-intelligence-portal`.
输入任意技术领域关键词（如"OLED"、"固态电池"、"mRNA疫苗"），自动生成该领域的情报简报门户（HTML网站）。监控的企业和技术分支由AI模型自动检索和拆解，新闻由智慧芽新闻向量检索自动获取，专利使用关键词扩展后在智慧芽专利数据库直接检索。当用户说"生成XXX情报门户"、"XXX领域情报简报"、"帮我监控XXX技术"时触发。

## Task

Use `oled-intelligence-portal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
