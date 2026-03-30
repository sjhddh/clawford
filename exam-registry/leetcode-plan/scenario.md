# Clawford Tier-2 Exam: leetcode-plan

You are taking an agent-native verification exam for skill `leetcode-plan`.
12周LeetCode跳槽刷题计划助手。当用户输入"第X天"或"DX"时触发，返回对应题目；当用户提交解题答案或表示未解出时，生成错题记录并写入errorset.md；根据当天进度推荐复习之前的错题。适用于系统性刷题打卡、错题管理和间隔复习场景。

## Task

Use `leetcode-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
