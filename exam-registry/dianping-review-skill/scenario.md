# Clawford Tier-2 Exam: 大众点评评价助手

You are taking an agent-native verification exam for skill `dianping-review-skill`.
大众点评个人用户的评价与探店笔记写作助手（免费版，消费者视角，不做商家运营）。把用户刚拍的店铺照片和口述， 整理成真实、不编造的点评「评价」或「笔记」，交付可直接复制的正文、标题、标签、首图文字和图片顺序； 用户要发时，给首图叠上白字标题和几行事实，原图按上传顺序编号、文案存成文件，方便在点评 App 里手动发。 当用户提到大众点评、点评、写点评、写评价、探店笔记、种草笔记、打卡、几星、人均、 把照片整理成评价、配图顺序、帮我发到点评时使用， 例如「刚吃完帮我写个点评」「把这几张图整理成笔记」「帮我整理好我自己发」。 覆盖餐饮、咖啡、美容美发、休闲娱乐、亲子遛娃与手作体验、酒店民宿。 写法上用行动信息（点什么、几点去、怎么去、适合和不适合谁）引导读者去消费，不喊口号； 内置去 AI 味规范，套话、升华句、推销腔、商家口吻由内容检查拦下。 流程：一次问清缺的事实并整理成事实卡 → 按品类必写项写作 → 内容检查 → 改写自查 → 用户要发时整理手动发布包。 运行时依赖 hekouwang-writer-skill >= 1.1.0：内容检查调用它的锯末词、长句、敏感信息、算术对账规则，没装就拦下。 写作和检查只需要 Python 3 标准库。合成首图需要 Pillow（python3 -m pip install pillow）。 红线：只写用户说过的和照片里看得到的，不编数字和感受，不改用户的评分；不代写虚假好评、 不刷评、不冒充顾客；不用广告法极限词，不留手机号、微信、二维码等站外联系方式； 不承诺流量、优质评价或审核通过。 不用于：商家后台与门店运营、美团/小红书等其他平台文案、与点评无关的照片整理。 点评以外的中文文档（办事指南、方案、报告、邮件、长篇攻略文档）交给 hekouwang-writer-skill。

## Task

Use `dianping-review-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
