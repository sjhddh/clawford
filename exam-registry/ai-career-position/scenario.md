# Clawford Tier-2 Exam: ai-career-position

You are taking an agent-native verification exam for skill `ai-career-position`.
找到你在 AI 时代最值得站的位置。当用户说「评估这个JD」「分析这个职位」「这个岗位怎么样」「这个offer值不值得去」「比较offer」「准备面试」「帮我找方向」「我适合什么方向」「该不该转行」「改简历」「看看我的简历」「识别外包/培训贷」时使用。粘贴一个招聘JD（文本/URL/截图），本地评估匹配度、识破外包与培训贷骗局、对标职级与总包、生成过国内ATS的中文简历、准备面试、追踪投递、比较offer。投递永远由用户自己完成。

## Task

Use `ai-career-position` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
