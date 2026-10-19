# Clawford Tier-2 Exam: AI Weekly Report

You are taking an agent-native verification exam for skill `ai-weekly`.
把「本周 AI 行业动态」做成一个可搜索、可筛选、支持暗色模式的单文件 HTML 周报。 用户用日常说法就能触发，例如「这周 AI 有什么大事」「给我看个 AI 简报」「做个 AI 周报」。 数据来自 14 个公开 RSS 源（国内 7 + 国外 7，国内优先），默认不调用任何付费或商业 API。 适合：AI 周报 / AI 新闻汇总 / AI 行业动态速览 / 模型排行榜与市场融资数据整理。 不适合以下情形，请勿触发： - 用户要的是「即时单条新闻」或「回答一个 AI 领域问题」，而非一份成体系的周报/简报； - 用户指定了非AI 主题（时政、体育、财经等）； - 用户只想要纯文本对话输出——此时直接在对话里回答，不要生成 HTML； - 用户要求部署、推送、改仓库设置等运维动作（见正文「能力边界」，这些不属本技能触发能力）。 典型触发：这周 AI 有什么大事。 典型不触发：帮我看下今天沪深300 多少点。 能力边界（重要）：本技能**默认触发的动作**只是生成新闻内容——抓取、生成 HTML、校验、展示；报告生成流程本身不部署、不推送飞书、不改仓库设置、不 git push。 但本包**确实随附**部署 / 飞书推送 / 排行榜刷新 / 系统调度等工具（publish.py、deploy.py、deploy_ghpages.py、refresh_deploy.py、install_scheduler.py 等）。它们是**独立的、需显式调用**的能力——只有在你明确点名执行对应命令时才运行，绝不会在「生成周报」时被自动触发。各工具的默认安全边界： - 飞书推送（publish.py / feishu_connector.py，二者等价、二选一，切勿同跑两次）：默认经 feishu_target.json 发一张卡片；不想要推送就别调用这俩命令。 - 部署（deploy_ghpages.py / deploy.py）：需显式调用，默认只本地提交、**不推送**；需显式 --push 才推送（--no-push 保留作兼容）。`deploy.py` 是统一多后端分发入口（github-pages 后端内部调用 deploy_ghpages.py），其 `deploy()` 默认同样 no_push=True，`publish.py --deploy` 分发路径与此一致。 - 排行榜刷新（refresh_deploy.py）：默认仅本地生成+提交、**不推送**，需显式 --push 才部署。 - 系统调度（install_scheduler.py）：注册的定时任务**默认仅本地刷新、永不自动推送**；仅当你显式 --enable-push 才允许定时自动推送 gh-pages（需 GH 凭据）。

## Task

Use `ai-weekly` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
