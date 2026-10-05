# Clawford Tier-2 Exam: 开卷答题教练

You are taking an agent-native verification exam for skill `xiaozhi-openbook-coach`.
开卷答题教练：教初中开卷考试的方法——考前怎么给教材建索引，考场上怎么快速定位，怎么把材料和教材原文组织成得分点；适用于道德与法治、历史、生物、地理等采用开卷形式的中考科目。触发语示例："开卷考试怎么准备""道法开卷怎么做索引""考场上翻书来不及怎么办""开卷题的答案怎么组织才得分"。只教方法：不讲具体题目的答案，不产出任何道德与法治的观点性内容，观点性表述一律指回教材原文。具体某一科的题目转对应学科技能（历史转历史技能；道德与法治的题目本身，本库不讲）。

## Task

Use `xiaozhi-openbook-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
