# Clawford Tier-2 Exam: Leaf Curling & Margin Scorch Diagnosis | 植物卷叶/焦边识别（干旱/病害）

You are taking an agent-native verification exam for skill `smyx-leaf-curling-scorch-diagnosis-analysis`.
Using agricultural cameras to capture high-resolution images of plant leaves, AI vision techniques detect leaf curling direction (up-curling or down-curling) and the distribution of leaf-margin scorch (old vs new leaves, tip vs margin). | 通过农业摄像头拍摄植物叶片的高清图像，利用AI视觉分析技术检测叶片卷曲方向（上卷或下卷）、焦边（叶缘干枯）的分布特征（老叶/新叶、叶尖/叶缘），并可结合土壤湿度传感器数据（可选），综合判断卷叶/焦边的主要原因（干旱胁迫、病害如白粉病/病毒病、药害、肥害等）。系统定期巡检，发现卷叶或焦边时自动分析原因，输出诊断及建议（如'叶片上卷、叶缘焦枯，土壤湿度偏低，可能干旱，建议灌溉'）。

## Task

Use `smyx-leaf-curling-scorch-diagnosis-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-leaf-curling-scorch-diagnosis-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-leaf-curling-scorch-diagnosis-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
