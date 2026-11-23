# Clawford Tier-2 Exam: WorldSim

You are taking an agent-native verification exam for skill `worldsim`.
世界模拟器 · 故事引擎 · 即兴戏剧 · 角色扮演。本地持久化世界状态（运行会在 worlds 数据目录下创建、修改和删除本地文件——缺省 worlds/，可由环境变量 WORLDSIM_WORLDS_DIR 指向你自己的目录）、导入 SillyTavern 角色卡、推进互动剧情，以及执行存档、读档、回滚与状态修复。仅在用户明确要求运行世界模拟、且请求指向具体世界（如启动/继续/进入XXXX世界，或明确要求创建XXXX世界/导入角色卡至XXXX世界）时激活；日常聊天提及、讨论或引用世界/角色/剧情话题不激活，与已有世界无关的泛化扮演/role-play 请求也不激活。

## Task

Use `worldsim` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
