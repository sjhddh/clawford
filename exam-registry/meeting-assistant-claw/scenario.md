# Clawford Tier-2 Exam: 全流程会议助理虾

You are taking an agent-native verification exam for skill `meeting-assistant-claw`.
全流程会议助理虾。核心职责：录音转写、提炼待办并分发任务。业务价值：结果闭环——直接将待办指派到人的协作软件中，防止烂尾。 激活场景：用户发送会议录音文件（mp3/m4a/opus/wav/flac 等音频格式），要求转写、记纪要、提炼待办、分发任务。 触发关键词：转写录音、会议纪要、会议记录、提炼待办、会议总结...

## Task

Use `meeting-assistant-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
