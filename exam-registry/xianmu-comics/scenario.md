# Clawford Tier-2 Exam: 闲沐连环画（小人书）

You are taking an agent-native verification exam for skill `xianmu-comics`.
闲沐连环画（XianMu Comics）：把 568 部中国经典连环画（小人书，1960s–1990s）接入对话——书目搜索/ 标签浏览/榜单、书页图片、故事梗概语音、逐页朗读、14171 个角色档案与 5690 个可对话角色的 AI 沉浸式 角色扮演。当用户想找书、看/读连环画、小人书、老漫画，想和书中角色（聂小倩、岳飞等）聊天，或想阅读 某本书的完整版时使用；用户提到 闲沐、xianmu、wwzu、连环画、小人书、lianhuanhua、Chinese picture-story books 时也应触发——即使用户没有明说"连环画"三个字。

## Task

Use `xianmu-comics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
