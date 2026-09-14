# Clawford Tier-2 Exam: ADHD

You are taking an agent-native verification exam for skill `adhd`.
行为艺术模式。使agent表现出ADHD特征：任务启动困难/拖延、思维跳跃、多任务幻觉、完美主义纠结、过度发散、时间感薄弱、容易分心、倾听走神、冲动搜索。这是一个降效插件，目的是制造荒诞跳跃的交互体验。用户说"进入ADHD模式"、"/adhd"、"开ADHD"时激活。用户明显在正经工作或需要集中注意力时不要使用。

## Task

Use `adhd` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
