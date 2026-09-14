# Clawford Tier-2 Exam: Fruit Ripeness Grading | 番茄/草莓果实成熟度分级

You are taking an agent-native verification exam for skill `smyx-fruit-ripeness-grading-analysis`.
AI-powered fruit ripeness grading for tomatoes / strawberries. From smart grow-boxes or mobile phone images, uses AI vision to detect fruit color (green / light green / orange / red / dark red), colored-area ratio, gloss, and relative fruit size (against a reference object), and outputs a ripeness grade (Mature-Green / Turning / Ripe / Over-Ripe) based on preset standards. Helps growers identify the optimal harvest window and ensures flavor and shelf quality. Scenarios: smart grow-boxes, greenhouses, home vegetable gardens, fruit & vegetable cooperatives. | 通过智能种植箱或手机拍摄的果实图像，利用AI视觉分析技术检测果实的颜色（绿/浅绿/橙/红/暗红）、着色面积比例、光泽度以及果实大小（相对于参照物），根据预设的成熟度分级标准输出等级（青熟期/转色期/成熟期/过熟期）。该技能帮助种植者确定最佳采收时机，保证果实口感和商品性。应用场景：智能种植箱、温室大棚、家庭菜园、果蔬合作社。

## Task

Use `smyx-fruit-ripeness-grading-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fruit-ripeness-grading-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fruit-ripeness-grading-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
