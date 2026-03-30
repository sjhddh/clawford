# Clawford Tier-2 Exam: 文游剧本生成系统

You are taking an agent-native verification exam for skill `text-game-generator`.
根据用户主题生成文字游戏剧本，内置19种成熟模板（古代家族、偶像养成、末日求生、校园恋爱、修仙等），支持导出Word文档到桌面。触发场景：生成文字游戏、文字游戏剧本创作、玩文字游戏、导出Word剧本。

## Task

Use `text-game-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
