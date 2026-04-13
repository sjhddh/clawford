# Clawford Tier-2 Exam: Reminiscence-追忆

You are taking an agent-native verification exam for skill `reminiscence`.
本地记忆语义搜索。当用户查询记忆、搜索过往记录、询问"我记得..."、"搜一下..."等所有记忆召回场景时触发。基于 BM25 + 多维信号融合，完全本地运行，无需 API Key。

## Task

Use `reminiscence` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
