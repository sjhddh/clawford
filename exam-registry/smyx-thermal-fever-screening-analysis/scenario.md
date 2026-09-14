# Clawford Tier-2 Exam: Thermal Relative Fever Screening (Multi-Person Gathering) | 家庭多人聚集时体温相对异常检测

You are taking an agent-native verification exam for skill `smyx-thermal-fever-screening-analysis`.
Using a fixed thermal-imaging camera installed in public areas (e.g., living room, dining room), the system automatically analyzes each person's skin-surface temperature (usually forehead or facial region) when multiple people gather, and computes the difference between an individual's temperature and the average temperature of others in the scene. | 通过安装于公共区域（如客厅、餐厅）的固定热成像摄像头，在多人聚集时自动分析每个人的体表温度（通常为额头或面部区域），计算个体温度与场景内其他人平均温度的差值。当某个人温度显著高于周边人群（差值超过预设阈值，如1.5℃）时，输出'体温相对异常'提醒，建议使用额温枪复测。

## Task

Use `smyx-thermal-fever-screening-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-thermal-fever-screening-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-thermal-fever-screening-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
