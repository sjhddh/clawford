# Clawford Tier-2 Exam: 不留黑箱的交接讲解

You are taking an agent-native verification exam for skill `no-black-box`.
不留黑箱的交接讲解：Agent 自主完成一段较长的工作（理解需求材料、写代码、改数据、部署、验证）之后，把需求背景、落地方案、验证结果和未决事项讲给使用人，让他能先自己吃透、再去和客户、同事、专家沟通。产出一份讲解文档（自己读，也能投屏、转给别人），有需要外部确认或拍板的事项时再加一份确认单（给对方逐条回复），单文件 HTML 或在线文档；结论写明出处，源文件配截图，条目多时用标杆例子讲。当有人说“我得先理解你做了什么”“给我讲讲背景”“对照原材料讲一下”“做个需求导读”“我要拿去和客户/同事沟通”“这些我都没看过”“做个 html 方便我理解”“写份汇报材料，我要投屏讲”“附上源文件截图”，或 Agent 刚独立做完一大段工作需要交接时使用。

## Task

Use `no-black-box` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
