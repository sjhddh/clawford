# Clawford Tier-2 Exam: AI Weekly Report

You are taking an agent-native verification exam for skill `ai-weekly`.
把「本周 AI 行业动态」做成一个可搜索、可筛选、支持暗色模式的单文件 HTML 周报。 用户用日常说法就能触发，例如「这周 AI 有什么大事」「给我看个 AI 简报」「做个 AI 周报」。 数据来自 14 个公开 RSS 源（国内 7 + 国外 7，国内优先），默认不调用任何付费或商业 API。 适合：AI 周报 / AI 新闻汇总 / AI 行业动态速览 / 模型排行榜与市场融资数据整理。 不适合以下情形，请勿触发： - 用户要的是「即时单条新闻」或「回答一个 AI 领域问题」，而非一份成体系的周报/简报； - 用户指定了非AI 主题（时政、体育、财经等）； - 用户只想要纯文本对话输出——此时直接在对话里回答，不要生成 HTML； - 用户要求部署、推送、改仓库设置等运维动作（见正文「能力边界」，这些不属本技能触发能力）。 典型触发：这周 AI 有什么大事。 典型不触发：帮我看下今天沪深300 多少点。 能力边界（重要）：本技能默认行为只是生成新闻内容——抓取、生成 HTML、校验、展示。 它不会部署、不会推送飞书、不会改动仓库任何设置（含 GitHub Pages）、不会执行 git push。 部署/推送/切 Pages 源/刷新排行榜均不属于触发能力，仅在用户明确点名要求时才执行。

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
