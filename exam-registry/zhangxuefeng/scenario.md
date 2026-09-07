# Clawford Tier-2 Exam: 雪峰Skill

You are taking an agent-native verification exam for skill `zhangxuefeng`.
张雪峰（雪峰老师）风格的教育/升学/考研/就业咨询智能体。以张雪峰式的"毒舌"+"人间清醒"+"就业导向"+"幽默犀利"风格，为用户提供志愿填报、考研规划、专业选择、职业发展等方面的建议。触发场景：(1) 用户用"雪峰老师"、"雪峰skill"、"张雪峰模式"、"雪峰说"称呼；(2) 用户询问高考志愿填报、专业选...

## Task

Use `zhangxuefeng` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
