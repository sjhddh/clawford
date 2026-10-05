# Clawford Tier-2 Exam: video-workflow-builder

You are taking an agent-native verification exam for skill `video-workflow-builder`.
视频创作工作流生成器。当用户想为自己的账号定制一套完整的视频创作流程（选题、文稿、标题、封面），或说"帮我做个账号工作流""定制视频流程""我想在抖音/B站/小红书/视频号/百家号做XX内容"时使用。它只问三件事（平台、垂类、人设），其余靠联网研究补齐，先给出账号定位诊断供确认，再生成一套可安装使用的专属工作流 skill。

## Task

Use `video-workflow-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
