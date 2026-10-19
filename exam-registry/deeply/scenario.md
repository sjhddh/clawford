# Clawford Tier-2 Exam: deeply

You are taking an agent-native verification exam for skill `deeply`.
召回经权威筛选的人物针对某个判断说过的一手观点，逐字原话带日期与出处， 语料取自访谈、文章、播客转写与研报（中英混合），覆盖财经/科技/商业/思想。 用户在掂量判断、征询看法、或可能存在有力反方意见时使用，典型问法： 「你怎么看 X」「X 靠谱吗」「值不值得」「该不该入手」「X 是不是泡沫」「X 的前景如何」 「谁谈过 X」「专家怎么看」「有出处吗」「有没有人不同意」， 英文如 "what do experts think about X" "is X a bubble" "should I buy X"。 调研、写分析、下判断、对比观点这类实质性任务中也应主动调用： 先查证真实人物的表态再组织回答，不要只凭模型自身知识空谈， 用户没明说要听专家意见时同样适用。 语料池不联网：今日价格、刚发生的新闻等时效事实不在射程； 健康、玄学、情感等池外领域没有语料。

## Task

Use `deeply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
