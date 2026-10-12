# Clawford Tier-2 Exam: Living-Alone Sleep Rhythm Anomaly Analysis | 独居者作息规律异常分析

You are taking an agent-native verification exam for skill `smyx-living-alone-rhythm-anomaly-analysis`.
Using a fixed camera in the living room or bedroom of a person living alone, the system continuously analyzes night video (typically 22:00-06:00) to detect lights-off time (when light sources turn off) and early-morning activity (human movement or body motion between 0-6 AM). It builds a personal historical baseline (e.g., average lights-off time and early-morning activity frequency over the past 7-14 days). | 通过家庭客厅或卧室固定摄像头，夜间（通常指22:00-6:00）连续分析视频，检测熄灯时间（光源关闭的时刻）、凌晨活动（0-6点期间的人体移动或肢体动作）。建立个人历史基线（如过去7-14天的平均熄灯时间和凌晨活动频率），当当前熄灯时间比基线延迟超过2小时，或凌晨活动频次显著增加（如超出基线2个标准差）时，输出'作息规律异常'提醒。

## Task

Use `smyx-living-alone-rhythm-anomaly-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-living-alone-rhythm-anomaly-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-living-alone-rhythm-anomaly-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
