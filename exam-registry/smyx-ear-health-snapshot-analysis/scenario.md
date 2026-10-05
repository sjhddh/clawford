# Clawford Tier-2 Exam: Pet Ear Health Snapshot & Redness Recognition | 宠物耳道健康抓拍与红肿识别

You are taking an agent-native verification exam for skill `smyx-ear-health-snapshot-analysis`.
Triggers when a user provides a pet ear/scratching/head-shaking video URL or file for analysis; uses smart camera to monitor head-shaking and ear-scratching actions, automatically captures HD ear-canal images, and applies AI vision analysis to identify ear-canal color (pink/red/dark red), presence of black granular discharge (ear mites), and degree of earwax accumulation. When redness, large discharge or suspected ear mites are detected, outputs abnormality alerts and recommends owner check-up or veterinary visit. Application: pet families, boarding centers, pet hospital pre-screening. Helps early detection of ear-canal diseases and prevents deterioration. | 当用户提供宠物甩耳、挠耳或耳道抓拍视频URL或文件时，触发本技能进行耳道健康监测分析；通过智能摄像头实时监测甩耳/挠耳动作，自动触发高清抓拍耳道内部图像，利用AI视觉分析识别耳道颜色（粉红/红/暗红）、有无黑色颗粒状分泌物（耳螨）、耳垢堆积程度等异常指标；当检测到红肿、大量分泌物或疑似耳螨时，输出异常提示，建议主人进一步检查或就医，仅输出基于视觉的客观描述与建议，不提供医疗诊断。应用场景：宠物家庭日常健康监测、寄养中心批量监控、宠物医院预检。

## Task

Use `smyx-ear-health-snapshot-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-ear-health-snapshot-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-ear-health-snapshot-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
