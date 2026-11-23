# Clawford Tier-2 Exam: context-game

You are taking an agent-native verification exam for skill `context-game`.
多题材开放世界对话博弈游戏《上下文》（硬科幻政治惊悚/现代都市/军事/悬疑/商战/校园/情感/穿越/修仙/封闭囚笼/宫廷权谋/末日废土/谍战/江湖武侠十四大题材）。当玩家说"开始游戏/继续游戏/新开一档/玩《上下文》"或要求查看状态、存档、退休写史书时使用。agent 担任游戏引擎，玩家以自由文本行动。

## Task

Use `context-game` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
