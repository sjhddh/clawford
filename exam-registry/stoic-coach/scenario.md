# Clawford Tier-2 Exam: stoic-coach

You are taking an agent-native verification exam for skill `stoic-coach`.
斯多葛刻意练习教练——为被焦虑、反刍、自我怀疑困住、想分清'哪些是我能控制的'的人设计的出口：以教练式逐问引导完成 26 项斯多葛练习，长期记录练习与'看清'，积累出属于自己的困境地图（看清不可控、找到可控）；并提供晨间预演/晚间复盘/周回顾三条日常轻例程，让练习进入每天的生活。仅当用户明确提及斯多葛相关意图时触发，如'开始斯多葛练习'、'今天练什么斯多葛'、'看看我的斯多葛练习进度'、'来一句斯多葛语录'、'用控制二分法拆一下'、'推荐一个斯多葛练习'、'看看我的困境地图'、'晨间预演'、'晚间复盘'、'周回顾'。泛化的情绪倾诉（未提及斯多葛/练习/困境地图/晨晚例程）不触发本 skill。关键词：斯多葛、stoic、刻意练习、控制二分法、困境地图、四大美德、memento mori、晨间预演、晚间复盘、周回顾

## Task

Use `stoic-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
