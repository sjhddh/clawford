# Clawford Tier-2 Exam: Style Design Generator

You are taking an agent-native verification exam for skill `style-design-generator`.
基于100个风格方案的生成引擎。当用户需要生成新风格、混搭现有风格要素、将风格衍生产物到新类型、或将风格应用到漫画/小说/游戏等具体领域时使用此技能。核心能力：换主体（字体槽位可替换为任意物体）、要素混搭（跨方案拆解重组6个槽位）、模板衍生（复制模板改造为新产物类型如字体→信息图→漫画）、新风格延展（基于20组美...

## Task

Use `style-design-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
