# Clawford Tier-2 Exam: JD智能解读

You are taking an agent-native verification exam for skill `jd-interpreter`.
招聘需求智能解读技能。输入任意岗位JD（粘贴/上传/URL），自动进行8维深度解读：JD结构化拆解→显性隐性需求解构→需求权重评分→能力差距自评引导→面试考点预测→学习提升路线图→ATS关键词注入→薪资对标分析，生成交互式HTML可视化解读报告。触发词：JD解读、岗位解读、招聘需求分析、解读JD、这个岗位要什么、...

## Task

Use `jd-interpreter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
