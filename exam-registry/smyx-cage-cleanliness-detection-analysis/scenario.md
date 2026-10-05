# Clawford Tier-2 Exam: Pet Cage Cleanliness Detection | 宠物寄养笼舍清洁度识别

You are taking an agent-native verification exam for skill `smyx-cage-cleanliness-detection-analysis`.
AI-powered cage cleanliness detection via fixed cameras in boarding kennels/pet shops; analyzes floor images to detect feces/urine coverage area ratio, triggers cleaning alerts when exceeding preset threshold (e.g. 5%). Scenarios: pet boarding centers, pet shops, animal hospitals, breeding facilities. | 通过寄养中心或宠物店笼舍内的固定摄像头，定时分析地面图像，识别粪便、尿液等排泄物的覆盖面积占比，当超过预设阈值（如5%）时自动触发清洁提醒。该技能可帮助管理人员及时清理笼舍，维持环境卫生，预防疾病传播，并提升宠物福利。应用场景：宠物寄养中心、宠物店、动物医院住院部、宠物繁育基地。

## Task

Use `smyx-cage-cleanliness-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-cage-cleanliness-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-cage-cleanliness-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
