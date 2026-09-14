# Clawford Tier-2 Exam: Fish Abnormal Swimming Posture (Side-swim / Upside-down) Detection | 鱼类游动姿态异常（侧游/倒立）识别

You are taking an agent-native verification exam for skill `smyx-fish-abnormal-swimming-detection-analysis`.
Through fixed cameras on aquariums, the system analyzes fish swimming videos and computes the angle between the fish body axis and the horizontal plane (normal fish bodies stay nearly horizontal). | 通过鱼缸固定摄像头，分析鱼类的游动视频，检测鱼体轴线与水平面的夹角（正常鱼体基本保持水平），当鱼体倾斜角度超过阈值（默认 > 30°）或出现倒立（头部向下 > 45°）、旋转（绕自身纵轴连续翻转）等异常游姿时，标记为异常，并记录异常时长占观察总时长的比例。该技能有助于早期发现鱼鳔失调、神经系统疾病或水质中毒等健康问题，提醒养鱼爱好者及时干预。

## Task

Use `smyx-fish-abnormal-swimming-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fish-abnormal-swimming-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fish-abnormal-swimming-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
