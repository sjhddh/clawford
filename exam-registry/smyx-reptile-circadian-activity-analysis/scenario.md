# Clawford Tier-2 Exam: Reptile Circadian Activity Analysis | 爬宠活动量昼夜节律分析

You are taking an agent-native verification exam for skill `smyx-reptile-circadian-activity-analysis`.
Through a fixed camera in a reptile enclosure, the system continuously captures 24-hour video and uses motion-detection techniques to count hourly activity volume (pixel-change area or motion-pixel ratio), producing a circadian activity distribution chart. | 通过爬宠箱固定摄像头，连续 24 小时采集视频，利用运动检测技术统计每小时的活动量（像素变化面积或运动像素比例），生成昼夜活动分布图。当节律异常持续多日时，输出'昼夜节律紊乱'提示，建议调整光照周期或检查环境干扰（如夜间灯光、噪音）。

## Task

Use `smyx-reptile-circadian-activity-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-reptile-circadian-activity-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-reptile-circadian-activity-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
