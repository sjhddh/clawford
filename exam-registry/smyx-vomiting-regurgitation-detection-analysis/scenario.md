# Clawford Tier-2 Exam: Pet Vomiting / Regurgitation Detection | 宠物呕吐/反流行为识别

You are taking an agent-native verification exam for skill `smyx-vomiting-regurgitation-detection-analysis`.
AI-powered pet vomiting and regurgitation detection from indoor fixed-camera video. Identifies rhythmic abdominal contractions, head-forward extension, and mouth opening actions, plus detects vomitus on the floor (food, hairball, bile). Records event time, frequency, and vomitus characteristics for early digestive issue discovery. Scenarios: daily home health monitoring, multi-pet households, senior pet care, animal hospital inpatient observation. | 通过室内固定摄像头分析宠物活动区域的连续视频，利用动作识别技术检测宠物的呕吐或反流行为（包括腹部节律性收缩、口部张合、头部前伸等典型动作），同时识别地面是否出现呕吐物（食物残渣、毛球、黄色胆汁等），记录发生时间、频次以及呕吐物特征。有助于主人及早发现宠物的消化系统问题，避免延误治疗。应用场景：宠物家庭日常健康监护、多宠家庭、老年宠物护理、宠物医院住院观察。

## Task

Use `smyx-vomiting-regurgitation-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-vomiting-regurgitation-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-vomiting-regurgitation-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
