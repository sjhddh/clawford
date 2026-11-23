# Clawford Tier-2 Exam: 元阁 yotta-skills

You are taking an agent-native verification exam for skill `yotta-skills`.
元阁 -- 元阁全家技能的总编排策划 + 编排路由 + 一键安装器 + 技能盘点 + 本机技能 Hub + 运行时 hook 适配。Hub 层：hub hosts 只读发现本机已装智能体与技能目录（文件系统优先，不读元忆；已核实 / 自动发现 / 桥接分类 + 状态细分：可用 / 残留（实体未确认）/ 未创建 /...

## Task

Use `yotta-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
