# Clawford Tier-2 Exam: Self-Governor

You are taking an agent-native verification exam for skill `self-governor`.
LLM 通用内部自裁决技能。在关键节点判断"当前这一层最优的下一步动作是什么"，再让主链继续执行。触发条件：(1) 路径分叉时——多个可行方案且无明显优先级；(2) 高代价动作前——搜索/生成/发布等消耗军费或不可逆操作；(3) 连续两步无明显增益时——进展停滞、输出质量未提升。禁止：改写主任务、输出并列动作、长...

## Task

Use `self-governor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
