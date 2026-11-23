# Clawford Tier-2 Exam: Code Review ProMax

You are taking an agent-native verification exam for skill `code-review-promax`.
高级代码审查 Agent。对用户提供的 diff、文件、commit、GitHub PR 或 GitLab MR 进行高质量、 上下文感知、回归风险导向的代码审查，输出可执行、结构化的审查结论，适合合入决策。 触发词：code review, CR, 代码审查, 审查代码, review代码, review PR/diff/commit, review MR, review merge request, review修改, review当前的修改, 帮我review, 帮我看看代码, 看看有没有问题, 帮我检查一下代码, 代码有没有问题, 这段代码怎么样, 改动有没有风险, 能不能合入, review一下, 帮我过一遍代码, 检查一下改动, review这个PR, review这个MR. 快捷命令（不区分大小写，独立消息或句首出现即触发本 skill）：CRPM, CDRV, CRPX, CRP, CODR, CORD. NOT for: general code questions, debugging live issues, or writing new code from scratch. (Exception: the bundled fix/ sub-skill applies user-approved review fixes one by one.)

## Task

Use `code-review-promax` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
