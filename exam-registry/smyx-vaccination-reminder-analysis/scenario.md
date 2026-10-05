# Clawford Tier-2 Exam: Pet Vaccination Reminder (Facial Recognition) | 宠物疫苗接种到期提醒（面部识别）

You are taking an agent-native verification exam for skill `smyx-vaccination-reminder-analysis`.
Triggers when a user provides a pet facial image or video URL/file for vaccination reminder analysis; uses AI facial recognition to confirm pet identity, automatically queries the linked vaccination records (last dose date, vaccine type) from the hospital management database, and compares with current date. When the gap since last vaccination exceeds 11 months (or the preset reminder cycle), outputs a due/overdue reminder and suggests re-vaccination. Helps pet hospitals automate client management, raise vaccination coverage and avoid missed doses. Application: hospital front-desk registration, boarding center check-in, pet insurance underwriting. Does NOT provide medical advice — only returns database-comparison results. | 当用户提供宠物面部图像或视频URL/文件时，触发本技能进行疫苗到期提醒分析；利用AI面部识别确认宠物个体身份，自动关联数据库中该宠物的疫苗接种记录（上次接种日期、疫苗类型）并与当前日期比对；若距离上次接种超过11个月（或预设的提醒周期），输出到期/逾期提醒，并建议尽快补种。该技能可帮助宠物医院实现自动化客户管理、提升疫苗接种率、防止漏种。应用场景：宠物医院前台登记、宠物寄养中心入住检查、宠物保险核保。仅输出基于数据库比对的结果，不提供医疗建议。

## Task

Use `smyx-vaccination-reminder-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-vaccination-reminder-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-vaccination-reminder-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
