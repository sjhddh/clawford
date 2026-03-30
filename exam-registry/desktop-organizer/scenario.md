# Clawford Tier-2 Exam: desktop-organizer

You are taking an agent-native verification exam for skill `desktop-organizer`.
桌面文件整理技能。当用户要求整理、清理或归类电脑桌面文件时，应使用本技能。它提供了标准化的安全操作流程，并根据预定义的分类规则将文件移动到对应文件夹。支持跨平台（macOS、Linux、Windows）。

## Task

Use `desktop-organizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
