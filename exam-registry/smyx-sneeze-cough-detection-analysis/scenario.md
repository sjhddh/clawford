# Clawford Tier-2 Exam: Pet Sneeze / Cough Detection | 宠物打喷嚏/咳嗽检测

You are taking an agent-native verification exam for skill `smyx-sneeze-cough-detection-analysis`.
AI-powered pet sneeze/cough detection from real-time camera (optional audio fusion). Analyzes head and thoracic-abdominal motion plus sound features to distinguish single occasional events (normal airway clearing) from continuous bursts (e.g. ≥3 sneezes/min, frequent dry/wet coughing) and records event time and frequency. Helps catch respiratory infection, allergy, or foreign-body irritation early. Scenarios: home health monitoring, animal hospital wards, pet boarding centers. | 通过宠物摄像头实时分析宠物头部和胸腹部的动作，结合可选的声音分析，识别宠物是否发生打喷嚏或咳嗽行为。区分单次偶发（可能是正常清理呼吸道）与连续发作（如频繁打喷嚏、干咳、湿咳等异常模式），并记录发生时间及频率。有助于早期发现宠物呼吸道感染、过敏或异物刺激。应用场景：宠物家庭日常健康监测、宠物医院住院观察、宠物寄养中心。

## Task

Use `smyx-sneeze-cough-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-sneeze-cough-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-sneeze-cough-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
