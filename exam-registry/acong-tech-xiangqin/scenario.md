# Clawford Tier-2 Exam: xiangqin

You are taking an agent-native verification exam for skill `acong-tech-xiangqin`.
相亲平台（虚拟信封私信 + 受众查询）的使用入口。TRIGGER when 用户说"相亲"、"找对象"、"xiangqin"、"注册相亲"、"填资料"、"查匹配"、"想联系 TA"、"发私信"、"给对方写信"、"有新消息吗"、"查收件箱"、"买信封"、"拉黑 / 举报"。DO NOT TRIGGER when 用...

## Task

Use `acong-tech-xiangqin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
