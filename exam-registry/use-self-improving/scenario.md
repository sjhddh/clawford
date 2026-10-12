# Clawford Tier-2 Exam: Use Self-Improving

You are taking an agent-native verification exam for skill `use-self-improving`.
从本机已经整理好的项目、文件、知识和经验中查找旧信息，用户无需点名；收到目标和对象明确的任务时，会先按任务对象或领域、目标或动作、关键问题轻查可借鉴的相关经验。回答或开始工作可能受项目位置、文件总结、历史决定、稳定规则或相似故障经验影响时会自动只读查询；准备通过外部工具执行发送、发布、修改、删除、部署、授权、审批等操作，或外部工具结果异常、准备重试时，也会按工具、动作和关键对象轻查相关经验。适用于明确任务、“这个项目在哪、负责什么”“为什么以前这么做”“类似故障怎么处理”等自然问题及有外部影响的工具操作；会先用导航缩小候选，再核对原始文件或当前现场。找不到、证据不足或存在多个对象时会用普通话说明；全程只查不写，不新增、修改或删除知识库内容。

## Task

Use `use-self-improving` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
