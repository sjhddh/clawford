# Clawford Tier-2 Exam: JD 撰写台

You are taking an agent-native verification exam for skill `hr-jd-writer`.
JD 常见毛病：职责写成愿望清单、要求堆砌关键词、薪资含糊。结果要么没人投，要么来一堆不匹配的。 输入：岗位名称、核心职责 3-5 条、必备条件与加分项、团队情况、薪资区间与地点、用工形式。输出：①岗位一句话定位 ②职责（按优先级排序，每条以动词开头并写清产出）③必备/加分分开写 ④筛选问题（3 个能快速判断匹配度的问题）⑤薪资与福利表述建议 ⑥发布渠道建议与标题优化。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `hr-jd-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
