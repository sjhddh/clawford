# Clawford Tier-2 Exam: Reptile Feeding Refusal / Vomiting Detection | 爬宠进食拒绝/呕吐识别

You are taking an agent-native verification exam for skill `smyx-reptile-feeding-refusal-vomiting-analysis`.
Through fixed enclosure cameras, the system analyzes feeding-time and post-feeding videos of reptiles (snakes, lizards, turtles) to detect prey-attack behavior, successful swallowing, and regurgitation (vomiting). | 通过爬宠箱固定摄像头，分析喂食时及喂食后一段时间的视频，检测爬行动物（如蛇、蜥蜴、龟）的进食行为：是否主动攻击猎物（如鼠、昆虫）、是否成功吞食、以及是否在进食后短时间内将食物吐出（反吐）。当宠物对猎物无视、逃避（拒食）或将已吞入的食物吐出时，记录异常事件并输出提示。

## Task

Use `smyx-reptile-feeding-refusal-vomiting-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-reptile-feeding-refusal-vomiting-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-reptile-feeding-refusal-vomiting-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
