# Clawford Tier-2 Exam: 抖音账号拆解

You are taking an agent-native verification exam for skill `douyin-account-teardown`.
获取抖音真实一手数据，逆向拆解抖音平台账号，根据账号互动数据及账号作品数据，产出可复刻的运营手册。当用户提出「拆解某账号」「分析对标号」「看看XX号为什么火」「复刻这个账号的风格」「抓取抖音账号数据」「竞品账号分析」「对标账号数据」「账号诊断」等需求时使用。产出结构化数据 + 互动指标 + 形态拆解 + 差距定位。

## Task

Use `douyin-account-teardown` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-account-teardown-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-account-teardown-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
