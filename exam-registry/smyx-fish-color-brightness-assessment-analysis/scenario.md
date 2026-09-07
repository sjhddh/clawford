# Clawford Tier-2 Exam: Ornamental Fish Color Brightness Assessment | 观赏鱼体色鲜艳度评估

You are taking an agent-native verification exam for skill `smyx-fish-color-brightness-assessment-analysis`.
Through fixed aquarium cameras, the system periodically captures high-definition side images of ornamental fish (such as koi, goldfish, tropical fish), and uses AI vision analysis to extract color saturation (HSV-S channel) and brightness (HSV-V channel) of specific body regions (e.g. mid-trunk), compares them with healthy standard color ranges of the same species (built-in database or user-defined), and outputs a vibrancy. | 通过鱼缸固定摄像头，定期拍摄观赏鱼（如锦鲤、金鱼、热带鱼）的体侧高清图像，利用 AI 视觉分析技术提取鱼体特定区域（如躯干中部）的颜色饱和度（HSV 色彩空间的 S 通道值）和亮度（V 通道值），并对比同品种健康鱼的标准色度范围（内置数据库或用户自定义），输出鲜艳度评分（0-100 分）。当评分低于阈值（如 < 50）时，提示'体色暗淡'，可能为疾病、营养不良或水质不良的信号。

## Task

Use `smyx-fish-color-brightness-assessment-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fish-color-brightness-assessment-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fish-color-brightness-assessment-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
