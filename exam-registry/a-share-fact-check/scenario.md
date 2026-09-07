# Clawford Tier-2 Exam: A Share Fact Check

You are taking an agent-native verification exam for skill `a-share-fact-check`.
对中国上市公司相关的荐股文章、公众号推文、投资点评、雪球/小红书帖子、业绩说明会转述等"已存在的内容"做事实核验：把其中的财务数字与表态逐条拆出， 强制对齐 A 股/港股官方披露（巨潮资讯网 CNINFO、沪深北交易所、互动易/上证e互动、定期报告、临时公告、招股书），输出一份"哪些为真 / 哪些对不上 / 哪些查无此据 / 哪些是纯话术"的核验体检报告。当用户贴出一篇荐股文、股票点评、公司分析或截图并想知道"这靠不靠谱 / 数据是不是真的 / 帮我核实一下"时，当用户想核对某上市公司被引用的营收、净利润、毛利率、订单、市占率、股权或战略表态时，都要使用本 skill。 关键区分：本 skil

## Task

Use `a-share-fact-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
