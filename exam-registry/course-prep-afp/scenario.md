# Clawford Tier-2 Exam: 备课AFP · Course-Prep-Auto-Flow

You are taking an agent-native verification exam for skill `course-prep-afp`.
工程化备课系统（Course-Prep-Auto-Flow v1.0）。把"靠灵感备课"变成"走流程出内容"。用户提供课程主题、受众画像、参考素材，系统自动完成：P1信息采集→P2骨架设计→P3素材提炼→P4内容填充→P5结构审查→P6配图规划→P7终局产出。适用于公开课、直播课、工作坊的备课准备。触发关键词：备...

## Task

Use `course-prep-afp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
