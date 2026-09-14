# Clawford Tier-2 Exam: 漫剧工坊

You are taking an agent-native verification exam for skill `manju-factory`.
将AI漫剧链接转化为完整故事和AI分镜脚本。当用户提供漫剧链接并希望生成故事、脚本、分镜；或用户提到"漫剧二创"、"漫剧链接生成故事"、"AI漫剧脚本"、"看到一部漫剧想改编"等需求时使用此技能。

## Task

Use `manju-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
