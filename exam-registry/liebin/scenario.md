# Clawford Tier-2 Exam: liebin

You are taking an agent-native verification exam for skill `liebin`.
在动手写页面之前，先用用户产品的真实内容渲染出三个可并列对比的设计方案样张，逼用户做出取舍，再把「选了什么、否掉了什么、为什么」写成一份 DESIGN.md。当用户说「照着这个网站/这张图做一个」「帮我定个设计风格」「这个页面帮我设计一下」「做个落地页/UI/PPT 的视觉」，或者贴出参考网址、参考截图、design md 并想要一个新界面时，都先用这个 skill 走一遍确认，而不是直接开始写 HTML。用户手上什么都没有、只有一句「我想要那种高级感」时同样适用。页面已经落地、用户问「这跟当初选的还是同一个东西吗」时，走第五步验收，不要直接改代码。

## Task

Use `liebin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
