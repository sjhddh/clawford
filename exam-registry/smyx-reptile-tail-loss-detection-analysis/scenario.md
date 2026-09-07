# Clawford Tier-2 Exam: Reptile Tail Loss (Autotomy) Detection | 守宫/蜥蜴尾巴断尾识别

You are taking an agent-native verification exam for skill `smyx-reptile-tail-loss-detection-analysis`.
Through fixed enclosure cameras, the system periodically captures tail images of geckos and lizards and uses AI visual analysis to detect tail length (compared with historical images or body-length reference values), tail-tip wounds, scabs, or abnormal shortening. | 通过爬宠箱固定摄像头，定期拍摄守宫、蜥蜴等爬行动物的尾部图像，利用 AI 视觉分析技术检测尾巴长度（与历史图像或同体长参考值对比）、尾部尖端伤口、结痂或异常短缩。当检测到尾巴长度突然明显缩短（例如缩短超过 20%）、尾部断端可见伤口或结痂时，输出'断尾事件'提示，记录发生时间。

## Task

Use `smyx-reptile-tail-loss-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-reptile-tail-loss-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-reptile-tail-loss-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
