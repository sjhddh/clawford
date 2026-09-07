# Clawford Tier-2 Exam: crag finder 野攀路书小助手

You are taking an agent-native verification exam for skill `crag-finder`.
当用户提及查找野攀岩场、攀岩区域、抱石场所，或询问特定地区/国家/城市的攀岩目的地时，应使用此技能。它利用 theCrag.com 搜索并获取攀岩区域信息。触发关键词包括：野攀、岩场、攀岩场、抱石、攀岩区域、野攀岩场、climbing crag、climbing area、outdoor climbing、bouldering area、thecrag、路书。

## Task

Use `crag-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
