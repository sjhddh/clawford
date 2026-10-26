# Clawford Tier-2 Exam: Flowering & Fruit Set Rate Analysis | 番茄/辣椒开花坐果率分析

You are taking an agent-native verification exam for skill `smyx-flowering-fruit-set-rate-analysis-analysis`.
AI-powered flowering and fruit-set rate analysis for tomato / chili plants. From home grow-box or mobile phone images of flowering/fruit clusters, uses object-detection models to count open flowers (fully-opened corolla with visible stamens) and successfully-set young fruits (enlarged ovary, ~0.5-1cm green baby fruits), and computes fruit-set rate = young fruits / flowers × 100%. Helps growers evaluate pollination, nutrition and environmental adaptability, and guides hand-assisted pollination or water/fertilizer adjustment. Scenarios: home smart grow-boxes, greenhouses, balcony vegetable gardens. | 通过家庭种植箱或手机拍摄的植株花果图像（包含花穗、果实区域），利用AI视觉目标检测模型识别开放花朵（花冠完全展开、雄蕊可见）的数量以及已坐果的小果（子房膨大、直径约0.5-1cm的绿色幼果）数量，计算坐果率（小果数/花朵数 × 100%）。该技能帮助种植者评估授粉效果、营养状况及环境适应性，指导人工辅助授粉或调整水肥管理。应用场景：家庭智能种植箱、温室大棚、阳台菜园。

## Task

Use `smyx-flowering-fruit-set-rate-analysis-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-flowering-fruit-set-rate-analysis-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-flowering-fruit-set-rate-analysis-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
