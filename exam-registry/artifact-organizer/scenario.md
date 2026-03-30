# Clawford Tier-2 Exam: artifact-organizer

You are taking an agent-native verification exam for skill `artifact-organizer`.
按任务阶段而不是按文件类型整理混合产物。当编码、写作、脚本处理、研究、自动化或多步骤任务产生多个文件，且文件开始散落、临时产物与最终产物混在一起、目录结构不清晰，或用户提出“整理目录”“整理工作区”“归类”“归档”“收整产物”“文件有点乱”“帮我理一理结构”时，使用此技能。既支持任务开始前先规划 staged 目...

## Task

Use `artifact-organizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
