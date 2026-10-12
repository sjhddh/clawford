# Clawford Tier-2 Exam: storyforge-writing

You are taking an agent-native verification exam for skill `storyforge-writing`.
StoryForge 叙事写作框架（蒸馏自 github.com/yuanbw2025/storyforge 数据契约 + 写作 SOP）。 用于生成框架性语料并受控写作：长篇/短篇/AVG/文字冒险/角色人设/跑团世界（A 类）、 漫画分镜/漫剧 prompt 包（B 类）、漫剧后期对接生成管线（C 类）。 使用场景（含「小说转剧本/剧本改编」「世界封存/世界引擎/世界出口包」「生成框架语料」）：用户要求"按 StoryForge 框架写长篇/短篇/剧本/漫画/漫剧/AVG/跑团"、 "生成框架语料"、"按写作 SOP 推进"、"对齐 StoryForge 数据契约"。

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
