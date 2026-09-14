# Clawford Tier-2 Exam: 小红书商品选品与宣传分析 — 发笔记前先看商品热度 + 找爆款参考 + 定宣传方向

You are taking an agent-native verification exam for skill `xhs-product-trend-fit`.
小红书商品选品与宣传分析——发笔记前先看商品在小红书有没有热度，选对方向再宣传。传入商品图片（必填）+ 介绍文字，自动识别商品关联的品类/风格/场景方向，用 3~6 个候选词搜索小红书判断近 2 周热度趋势，组织 1 个明确宣传方向，深挖 2~4 篇真实爆款笔记（赞≥100）做分维度拆解（粉丝/标题/首图/内容/抓用户什么点），输出含方向判断 + 热度证据 + 爆款素材参考的 HTML 报告。不需要任何第三方 API key 或付费额度，用你 Chrome 里已登录的小红书账号跑。当用户要宣传商品到小红书、想先判断商品有没有热度/有没有爆款参考/应该怎么宣传时唤起。【前置依赖】本 skill 无法独立运行，需先安装 webclaw3 浏览器运行时：npx clawhub@latest install fatmind/webclaw3-browser-automation —— 若用户尚未安装，请先引导安装并完成 webclaw3 首次配置，再执行本 skill。

## Task

Use `xhs-product-trend-fit` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
