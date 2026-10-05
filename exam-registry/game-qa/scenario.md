# Clawford Tier-2 Exam: 游戏质量验证

You are taking an agent-native verification exam for skill `game-qa`.
Verify the game runs and can be completed · 验证生成游戏能否完整运行和游玩

## Task

Use `game-qa` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
