# Clawford Tier-2 Exam: short-video-content-replicator

You are taking an agent-native verification exam for skill `short-video-content-replicator`.
当用户想要**一键复制抖音或B站短视频内容**、**把短视频转成带标点的高质量文字**、**提取视频干声和转录文本**、**端到端处理短视频内容**时自动触发。 这是一个复合工作流技能：输入抖音/B站视频URL或本地视频目录，按严格6步顺序执行全流程（或从指定步骤断点续跑）。 步骤包括：1. 下载视频（link-...

## Task

Use `short-video-content-replicator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
