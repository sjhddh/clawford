# Clawford Tier-2 Exam: Pet Litter Box Usage Monitor (Frequency & Duration) | 宠物猫砂盆使用频次与时长

You are taking an agent-native verification exam for skill `smyx-litter-box-usage-monitor-analysis`.
Triggers when a user provides a litter-box area video URL or file for analysis; uses object detection and tracking to identify each cat's entry/exit times at the litter box, records daily usage frequency and per-visit duration (entry → exit), and compares against the historical baseline. When frequency rises/falls significantly, or per-visit duration is abnormally long/short, outputs a urinary-disease (cystitis, urinary obstruction, kidney disease) early-warning alert. Especially useful for individualized health management in multi-cat households. Application: multi-cat homes, catteries, vet hospital inpatient wards, boarding centers. Does NOT provide medical diagnosis — only outputs behavior-statistics-based alerts. | 当用户提供猫砂盆区域视频URL或文件时，触发本技能进行使用频次与时长分析；通过智能猫砂盆或固定摄像头分析视频，利用目标检测和跟踪技术识别每只猫咪进出猫砂盆的时刻，记录每日使用频次、单次停留时长（从进入至离开），并与历史基线对比；若频次显著增减或单次时长异常，则输出泌尿系统疾病（膀胱炎、尿闭、肾病等）预警，有助于多猫家庭的个体化管理及早发现健康问题。应用场景：多猫家庭、猫舍、宠物医院住院部、宠物寄养中心。仅输出基于行为统计的提示，不提供医疗诊断。

## Task

Use `smyx-litter-box-usage-monitor-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-litter-box-usage-monitor-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-litter-box-usage-monitor-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
