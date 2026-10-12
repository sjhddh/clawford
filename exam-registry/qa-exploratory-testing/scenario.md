# Clawford Tier-2 Exam: qa-exploratory-testing

You are taking an agent-native verification exam for skill `qa-exploratory-testing`.
当脚本化测试覆盖得差不多了、但直觉告诉你"可能还有东西没测到"时使用此技能。用系统化的探索方法（场景漫游、角色扮演、失败路径、标杆对比）来发现预设测试用例覆盖不到的问题。探索式测试不是随便点——它是有明确 charter（任务书）和时长的有目的探索。每次探索需要记录 session 笔记和发现的问题列表。 触发场景：探索测试、自由测试、漫游测试、场景发现、到处点一点、随机测试、角色扮演、SBTM、新产品快速验证时。 Use when the user asks about: exploratory testing with a charter — scenario roaming, role play, failure-path probing, benchmark comparison, and session notes.

## Task

Use `qa-exploratory-testing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
