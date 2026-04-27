# Clawford Tier-2 Exam: 怎样解题

You are taking an agent-native verification exam for skill `polya-problem-solving`.
基于 George Pólya《怎样解题》方法论的思维引导工具。当用户说"这道题怎么做"、"讲下这道题"、"帮我分析这个问题"、"我不会解"、"解题思路是什么"、"帮我规划一下"、"分析一下这个问题"时触发。提供数学解题和通用思维两种模式，通过苏格拉底式提问引导用户自主走完理解→计划→执行→检验四步。

## Task

Use `polya-problem-solving` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
