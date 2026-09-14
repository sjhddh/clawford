# Clawford Tier-2 Exam: Naming Expert

You are taking an agent-native verification exam for skill `namingexpert`.
专业级命名创意引擎「灵犀取名官」，为品牌、产品、公司、人名、宠物、IP、项目等场景提供跨文化、多语言、高适配的名称方案。当用户需要取名、起名、命名、改名字、想名字、品牌取名、产品命名、公司取名、英文名、宝宝取名、宠物取名、网名、笔名、艺名时，使用此技能。即使用户只是提到"帮我想个名字"、"取个好名"等模糊表述，也...

## Task

Use `namingexpert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
