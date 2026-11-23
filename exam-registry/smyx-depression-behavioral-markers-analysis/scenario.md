# Clawford Tier-2 Exam: Depression Behavioral Markers (Long Immobility & Appetite Change) | 抑郁症辅助行为标记（长时间不动、食欲改变）

You are taking an agent-native verification exam for skill `smyx-depression-behavioral-markers-analysis`.
Using fixed home cameras (bedroom and dining area), the system analyzes the multi-day behavior pattern of elderly people or solo-living individuals, detecting daily lying-in-bed duration (continuous lying > 20 hours per day) and a sharp drop in eating frequency / duration (e.g., daily eating-action count below 50% of personal baseline). | 通过家庭固定摄像头（卧室和餐厅区域），分析老年人或独居者连续多日的行为模式，检测卧床时长（连续卧床超过20小时/天）以及进食频次/时长骤减（如每日进食动作次数低于历史基线的50%）。当这些行为变化持续超过设定天数（如3天）时，输出行为变化报告，提醒家属或社区医生关注可能存在的抑郁倾向或其他健康问题。

## Task

Use `smyx-depression-behavioral-markers-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-depression-behavioral-markers-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-depression-behavioral-markers-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
