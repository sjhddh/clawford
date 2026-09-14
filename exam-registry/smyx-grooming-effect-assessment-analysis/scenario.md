# Clawford Tier-2 Exam: Pet Grooming Effect Assessment (Mats/Dandruff) | 宠物梳毛效果评估（毛结/皮屑）

You are taking an agent-native verification exam for skill `smyx-grooming-effect-assessment-analysis`.
AI-powered pet grooming effect assessment: detects mat residue area, dandruff coverage, and coat smoothness from post-grooming images, outputs a 0-100 grooming score with targeted re-grooming suggestions. Scenarios: daily home grooming, pet salon quality check, long-hair cat/dog shedding season management. | 通过智能梳毛器或普通摄像头拍摄梳毛后的宠物皮肤和毛发高清图像，利用AI图像识别技术检测毛结团块残留面积、皮屑覆盖率以及毛发顺滑度，自动评估本次梳毛效果，并提示是否需要进行二次梳理或进一步护理。有助于宠物主人判断梳毛是否彻底，预防毛球症和皮肤问题。应用场景：宠物家庭日常梳理、宠物美容店服务质检、长毛猫/犬换毛期管理。

## Task

Use `smyx-grooming-effect-assessment-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-grooming-effect-assessment-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-grooming-effect-assessment-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
