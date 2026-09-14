# Clawford Tier-2 Exam: Turtle Pneumonia Symptom (Open-Mouth Breathing) Detection | 龟类张嘴呼吸（肺炎征兆）识别

You are taking an agent-native verification exam for skill `smyx-turtle-pneumonia-symptom-detection-analysis`.
Through fixed enclosure cameras, the system analyzes mouth and nasal videos of turtles to detect abnormally frequent open-mouth breathing in non-feeding states (mouth opening frequency unusually elevated), as well as the presence of mucus (reflective spots or strands) or nasal discharge around the mouth and nose. | 通过龟缸固定摄像头，分析龟类的口鼻部视频，检测龟在非进食状态下（未摄食时）口部频繁开合（张嘴呼吸，频率异常增高），以及口鼻区域是否有黏液（反光点或丝状物）或鼻腔分泌物。当同时或单独出现上述症状时，输出'肺炎风险提示'，提醒饲养者检查环境温度、水质，并及时隔离治疗。

## Task

Use `smyx-turtle-pneumonia-symptom-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-turtle-pneumonia-symptom-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-turtle-pneumonia-symptom-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
