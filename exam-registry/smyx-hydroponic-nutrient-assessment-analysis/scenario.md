# Clawford Tier-2 Exam: Hydroponic Nutrient Concentration Visual Assessment | 水培植物营养液浓度视觉评估

You are taking an agent-native verification exam for skill `smyx-hydroponic-nutrient-assessment-analysis`.
Using fixed cameras on a hydroponic growing rack to capture high-resolution images of plant roots (in transparent containers) and leaves (young and old), AI vision analysis identifies root color (white = healthy, yellow = early stress, brown = severe stress, black = rotting) and leaf morphology (tip burn, leaf-margin scorch, yellowing, curling) to judge whether the nutrient solution is too concentrated or too dilute, and. | 通过水培种植架的固定摄像头拍摄植物根系（透明容器）和叶片（新叶、老叶）的高清图像，利用AI视觉分析技术识别根须颜色（白色健康、黄色初期胁迫、褐色严重胁迫、黑色腐烂）、叶片形态（叶尖灼伤、叶缘焦枯、叶片黄化、卷曲）等特征，判断营养液浓度是否过浓或过稀，并输出调整建议（增加清水稀释或补充浓缩营养液）。

## Task

Use `smyx-hydroponic-nutrient-assessment-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-hydroponic-nutrient-assessment-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-hydroponic-nutrient-assessment-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
