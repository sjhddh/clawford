# Clawford Tier-2 Exam: 抖音账号诊断

You are taking an agent-native verification exam for skill `douyin-account-analysis-report`.
当用户需要做抖音账号诊断、抖音账号分析、抖音账号复盘、账号体检、播放低或不推流排查、近期作品表现整理和内容优化方向判断时使用。基于用户提供的抖音主页链接、分享文案或 sec_user_id，整理账号资料和近 30 天作品结果，输出可执行的账号分析报告。

## Task

Use `douyin-account-analysis-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-account-analysis-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-account-analysis-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
