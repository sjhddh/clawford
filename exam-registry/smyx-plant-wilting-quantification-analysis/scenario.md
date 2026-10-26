# Clawford Tier-2 Exam: Plant Wilting Quantification (Underwatering / Overwatering) | 植物萎蔫程度量化（缺水/水多）

You are taking an agent-native verification exam for skill `smyx-plant-wilting-quantification-analysis`.
AI-powered plant wilting quantification from full-plant images via smart pots or fixed cameras. Detects leaf-stem angle (leaf droop), stem straightness, and leaf turgidity to quantify wilting severity (0-100%). Optionally fuses soil-moisture sensor data to discriminate dehydration (underwatering) vs. waterlogging (root hypoxia), and auto-triggers watering or drainage prompts for precision irrigation. Scenarios: smart pots, home gardening, greenhouses, plant factories. | 通过智能花盆或固定摄像头拍摄植物整体图像，利用AI视觉分析技术检测叶片与茎秆的夹角（叶片下垂角度）、茎秆挺直程度以及叶片舒展度，量化萎蔫程度（0-100%）。可选结合土壤湿度传感器数据，综合判断萎蔫原因是缺水还是水涝（根部缺氧导致）。可自动触发灌溉或排水提示，帮助用户精准浇水。应用场景：智能花盆、家庭园艺、温室大棚、植物工厂。

## Task

Use `smyx-plant-wilting-quantification-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-plant-wilting-quantification-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-plant-wilting-quantification-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
