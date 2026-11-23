# Clawford Tier-2 Exam: 快手账号拆解

You are taking an agent-native verification exam for skill `kuaishou-account-teardown`.
获取快手真实一手数据，逆向拆解快手平台账号，根据账号互动数据及账号作品数据，产出可复刻的运营手册。当用户提出「拆解某账号」「分析对标号」「看看XX号为什么火」「复刻这个账号的风格」「抓取快手账号数据」「竞品账号分析」「对标账号数据」「账号诊断」等需求时使用。产出结构化数据 + 互动指标 + 形态拆解 + 差距定位。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-account-teardown` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-account-teardown-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-account-teardown-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
