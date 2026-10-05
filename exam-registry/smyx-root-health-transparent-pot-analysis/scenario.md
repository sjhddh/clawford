# Clawford Tier-2 Exam: Plant Root Health Analysis (Transparent Pot) | 植物根系健康状况（透明盆）

You are taking an agent-native verification exam for skill `smyx-root-health-transparent-pot-analysis`.
AI-powered plant root health analysis from transparent pots or smart seedling boxes. Uses fixed cameras to capture images/videos of plant roots, identifies root tip color (white=active, brown=aging, black=rotten), root hair density, branching structure, and detects root rot symptoms (softness, mucus, blackish-brown color). Outputs a root health score (0-100) and vitality grade (Healthy/Normal/Weak/Rotten). Helps early detection of root issues (overwatering rot, fertilizer burn, pathogen infection) and guides care adjustments. Scenarios: smart seedling boxes, transparent pots, plant factories, hydroponic systems. | 通过智能育苗箱或透明花盆的固定摄像头，拍摄植物根系图像或视频，利用AI视觉分析技术识别根尖颜色（白色为活性强、褐色为老化、黑色为腐烂）、根毛密度、根系分支情况以及是否存在根腐病（软烂、粘液、黑褐色）。综合评估根系健康评分（0-100分），输出根系活力等级（健康/一般/衰弱/腐烂）。该技能有助于及早发现根部问题（如浇水过多引起的烂根、肥害、病菌感染），指导用户调整养护措施。应用场景：智能育苗箱、透明花盆、植物工厂、水培系统。

## Task

Use `smyx-root-health-transparent-pot-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-root-health-transparent-pot-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-root-health-transparent-pot-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
