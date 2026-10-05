# Clawford Tier-2 Exam: 差评管家

You are taking an agent-native verification exam for skill `negative-review-butler`.
差评管家技能。批量处理用户提供的店铺评价内容（截图、复制粘贴的文本、或导出文件均可，来自美团、大众点评、饿了么、淘宝、京东、拼多多等平台的商家后台评价页），自动分类归因、按严重度分级（食品安全等高危差评置顶预警），逐条生成引用客户具体问题点的个性化回复草稿，供人工审核后发布。适用场景：差评回复、差评处理、回复顾客评价、评价管理、差评分析、店铺评分维护，以及用户提供一批店铺评价并希望获得回复建议的任务。内置餐饮/本地生活与电商两套行业模板。本技能面向中文评价设计。反馈与定制联系：zenobiazizi.skills@foxmail.com

## Task

Use `negative-review-butler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
