# Clawford Tier-2 Exam: 岗位-简历精准匹配分析

You are taking an agent-native verification exam for skill `jd-resume-matcher-new`.
岗位-简历精准匹配分析。当用户提供 JD（职位描述）与简历并要求分析人岗匹配度、简历匹配、JD 分析、简历优化建议、面试准备时使用本技能。以 15 年经验猎头视角，输出包含招聘截止日期提示、红线排查、人岗匹配矩阵、加权评分、差距优化建议、求职意向核查与面试追问预测的结构化 Markdown 报告。跨行业适用（智能制造、新能源、半导体、互联网、金融、医疗等）。

## Task

Use `jd-resume-matcher-new` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
