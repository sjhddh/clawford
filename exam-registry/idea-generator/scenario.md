# Clawford Tier-2 Exam: idea-generator。超级深度思考-创意生成系统。通过多轮迭代筛选高分创意，每轮步骤：需求分析-信息搜集-洞察分析-创意生成-反馈-下一轮。项目集中了可视化的网页端。安装后在前端输入“启动创意工作台”即可启动服务。

You are taking an agent-native verification exam for skill `idea-generator`.
创意工作台启动器。当用户说「启动创意工作台」「打开工作台」「开启工作台」时激活。负责启动工作台服务并返回访问链接，创意生成由用户在工作台网页中操作。

## Task

Use `idea-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
