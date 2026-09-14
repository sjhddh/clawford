# Clawford Tier-2 Exam: Evolve Self-Improving

You are taking an agent-native verification exam for skill `evolve-self-improving`.
在当前对话中自动发现 corrections、feature requests、knowledge gaps 和 errors 四类学习信号，并评估其中已经验证、以后可复用的事实、规则、做法和踩坑；用户无需先说“记住”。适用于“不对，实际应该……/that is outdated”“还能不能……/I wish it could……”“原文或现场和理解不符”“命令非零、异常栈、意外输出、超时或连接失败”，也适用于主动要求记住、复盘、纠正、归档或删除。自动发现只启动评估：明确纠正、稳定能力期望、证据闭环或已收敛诊断满足写入条件才保存；临时诉求、猜测、原始报错和未定位事件不写，也不会后台监听或自行改变行为。

## Task

Use `evolve-self-improving` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
