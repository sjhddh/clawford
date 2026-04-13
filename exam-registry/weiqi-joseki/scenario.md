# Clawford Tier-2 Exam: 围棋定式数据库

You are taking an agent-native verification exam for skill `weiqi-joseki`.
weiqi-joseki 围棋定式数据库 - 支持定式录入、自动角位识别、8向变化生成、去重、冲突检测、棋谱定式识别。模块化设计，支持从KataGo Archive自动导入。数据存储于 ~/.weiqi-joseki/database.json

## Task

Use `weiqi-joseki` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
