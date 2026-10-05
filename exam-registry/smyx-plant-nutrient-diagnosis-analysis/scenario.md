# Clawford Tier-2 Exam: Plant Nutrient Deficiency Diagnosis | 植物缺素症视觉诊断

You are taking an agent-native verification exam for skill `smyx-plant-nutrient-diagnosis-analysis`.
AI-powered plant nutrient deficiency diagnosis from leaf images. Detects leaf color, morphology changes (pale green/yellow-green/purple-red, marginal scorch, interveinal chlorosis) via computer vision, matches against common deficiency symptom databases, and outputs the most likely deficient nutrient element (nitrogen, phosphorus, potassium, iron, magnesium, zinc, etc.) with confidence score. Enables precision fertilization, avoids blind over-fertilization. Scenarios: smart planters, home gardening, agricultural greenhouses, plant factories. | 通过智能花盆、农业大棚或手机拍摄的植物叶片高清图像，利用AI视觉分析技术识别叶片颜色、形态变化（如叶色浅绿/黄绿/紫红、叶缘焦枯、叶脉间失绿等），与常见营养缺乏症特征库比对，输出最可能缺乏的营养元素（氮、磷、钾、铁、镁、锌等）及置信度。有助于精准施肥，避免盲目用肥造成浪费或伤害。应用场景：智能花盆、家庭园艺、农业大棚、植物工厂。

## Task

Use `smyx-plant-nutrient-diagnosis-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-plant-nutrient-diagnosis-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-plant-nutrient-diagnosis-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
