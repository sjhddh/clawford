# Clawford Tier-2 Exam: double6-workbench-builder

You are taking an agent-native verification exam for skill `double6-workbench-builder`.
把普通用户反复要做的真实事情构建成离线优先、严格单文件、个人数据留在当前设备的本地工作台。用户提到个人工作台、学习台、备考台、任务面板、记录与复盘工具，或想把重复流程做成可保存恢复的页面时应使用；联网、多人协作、账号、支付和发布属于独立外部流程。

## Task

Use `double6-workbench-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
