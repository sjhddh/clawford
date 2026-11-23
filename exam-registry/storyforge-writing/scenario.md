# Clawford Tier-2 Exam: storyforge-writing

You are taking an agent-native verification exam for skill `storyforge-writing`.
StoryForge 叙事写作框架（蒸馏自 github.com/yuanbw2025/storyforge 的数据契约 + 写作 SOP）。 用于按 StoryForge 字段闭集生成「框架语料」并受控推进创作：长篇/短篇/小说转剧本/世界引擎封存与出口/ 角色卡/AVG·文字冒险·跑团（A 类）、漫画分镜·漫剧素材前期（B 类）、漫剧后期对接（C 类）。 触发：用户说"按 StoryForge/故事熔炉框架写""生成框架语料""按写作 SOP 推进""对齐 StoryForge 数据契约"， 或要做「小说转剧本」「世界封存/出口包」「分镜/漫剧 prompt 包」等结构化创作。 不用于：纯自由写作/润色（无结构化产物需求）、操作 StoryForge 应用本身。

## Task

Use `storyforge-writing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
