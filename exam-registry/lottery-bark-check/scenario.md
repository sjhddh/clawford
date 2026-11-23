# Clawford Tier-2 Exam: 彩票开奖核对推送

You are taking an agent-native verification exam for skill `lottery-bark-check`.
中国彩票开奖核对与 Bark 推送技能。必须配合 Bark App 使用：抓取中彩网（双色球）与 500 网（大乐透）官方最新开奖，与用户守号比对，判定奖级与金额，按定稿蓝黑版式生成报告，并通过 Bark 推送（group 固定「彩票」，需自备 Bark device_key）到手机，每天定时核对不漏期。关键词：彩票、双色球、大乐透、开奖号码、守号核对、中奖查询、Bark 推送、Bark device_key、开奖提醒、定时提醒。

## Task

Use `lottery-bark-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
