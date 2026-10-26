# Clawford Tier-2 Exam: 最佳东方求职助手

You are taking an agent-native verification exam for skill `veryeast-assistant`.
最佳东方求职助手（veryeast）：帮求职者找工作、搜职位、看职位详情、投简历、编辑简历、分析匹配度。 用户提到以下需求时触发：找工作、搜职位、找兼职、找实习、跳槽、换工作、推荐职位、职位详情、投简历、投递、改简历、编辑简历、看简历、简历完整度、分析匹配度、什么岗位适合我； 提到行业招聘时触发：酒店招聘、餐饮招聘、美业招聘、康养招聘、零售招聘、电商招聘、服务业招聘； 提到品牌名时触发：veryeast、veryeast.cn、veryeast求职、最佳东方、最佳东方求职。 不适用于企业侧招聘、HR 招聘管理/ATS、非服务行业职位（互联网、算法、金融）。

## Task

Use `veryeast-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
