# Clawford Tier-2 Exam: Zero-to-Launch

You are taking an agent-native verification exam for skill `zero-to-launch`.
帮独立开发者和创业者从"我好像想做点什么"到"我知道该做什么、做给谁、怎么验证"。 当用户分享产品想法、想做 side project、准备创业、或有模糊的产品直觉时使用。 与传统 PM 工具不同，这个 Skill 采用广度优先探索 + 可视化状态图， 让用户始终掌握全局，自主选择探索方向，而不是被动回答问题。...

## Task

Use `zero-to-launch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
