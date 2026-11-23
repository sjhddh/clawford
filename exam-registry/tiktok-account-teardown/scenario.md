# Clawford Tier-2 Exam: GUAIKEI TikTok账号拆解

You are taking an agent-native verification exam for skill `tiktok-account-teardown`.
获取TikTok真实一手数据，逆向拆解TikTok平台账号，根据账号互动数据及账号作品数据，产出可复刻的运营手册。当用户提出「拆解某账号」「分析对标号」「看看XX号为什么火」「复刻这个账号的风格」「抓取TikTok账号数据」「竞品账号分析」「对标账号数据」「账号诊断」等需求时使用。产出结构化数据 + 互动指标 + 形态拆解 + 差距定位。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。

## Task

Use `tiktok-account-teardown` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-account-teardown-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-account-teardown-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
