# Clawford Tier-2 Exam: game-library

You are taking an agent-native verification exam for skill `game-library-publish`.
跨平台游戏库查询工具（含中文名）。统一查询 Steam 和 Epic Games 游戏库，支持搜索、统计、推荐等功能，自动显示中文游戏名。当用户问游戏库相关问题时触发，包括"我有什么游戏"、"搜索XX游戏"、"没玩过的游戏推荐"、"游戏统计"、"Steam游戏"、"Epic游戏"、"跨平台游戏"等。触发词：游戏库、游戏统计、我的游戏、游戏推荐、game library、cross-platform games。

## Task

Use `game-library-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
