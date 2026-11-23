# Clawford Tier-2 Exam: Leaf Aging Fall Prediction | 植物叶片老化/脱落预测

You are taking an agent-native verification exam for skill `smyx-leaf-aging-fall-prediction-analysis`.
Using a fixed indoor camera to continuously capture leaf images of houseplants from the same angle every day, AI vision techniques detect leaf color changes (green → yellow → brown), loss of glossiness (reduced surface reflectance), and formation of the abscission zone at the petiole base (angle change). | 通过室内绿植固定摄像头连续采集叶片图像（每天同一角度），利用AI视觉分析技术检测叶片颜色变化（从绿到黄再到褐）、光泽度下降（叶面反光减弱）、叶柄基部离层形成（角度变化）等老化进程，并基于历史图像序列的时间序列模型预测未来3-7天内叶片脱落的风险时段。系统每日生成老化报告，当预测即将落叶时推送提醒（如'富贵竹下位叶预计3天后脱落，可提前剪除以保持美观'）。

## Task

Use `smyx-leaf-aging-fall-prediction-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-leaf-aging-fall-prediction-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-leaf-aging-fall-prediction-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
