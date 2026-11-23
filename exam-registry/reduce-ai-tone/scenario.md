# Clawford Tier-2 Exam: 降AI味

You are taking an agent-native verification exam for skill `reduce-ai-tone`.
降AI味——把读着「一股 AI 味」的中文改成像一个具体的人写的：按清单找出空泛开头、套话、排比、万能升华，再按读者和语气逐句改写，附套话与句长统计脚本。当用户说「AI味太重」「去AI腔」「改得像人写的」「读着像机器写的」时使用。

## Task

Use `reduce-ai-tone` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
