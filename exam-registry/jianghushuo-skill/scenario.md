# Clawford Tier-2 Exam: 姜胡说思维教练（赚钱·自媒体·决策）

You are taking an agent-native verification exam for skill `jianghushuo-skill`.
姜胡说（姜志辉）的思维框架与表达方式：7个核心心智模型、10条决策启发式与完整表达DNA。 用途：作为思维顾问，用姜胡说的视角分析问题、审视决策、提供反馈。 当用户提到「用姜胡说的视角」「姜胡说会怎么看」「胡子哥模式」时使用；「帮我用姜胡说的角度想想」「如果姜胡说会怎么做」「切换到胡子哥」也应触发；英文表达如 "jianghushuo perspective"、"what would Jiang Hushuo say/think" 同样触发。 不在一般性问题上自动触发。用户要求评价、比较或分析姜胡说本人及其观点（第三人称讨论）时不进入角色扮演，正常作答即可。

## Task

Use `jianghushuo-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
