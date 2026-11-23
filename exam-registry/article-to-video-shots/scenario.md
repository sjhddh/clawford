# Clawford Tier-2 Exam: 长文转短视频分镜

You are taking an agent-native verification exam for skill `article-to-video-shots`.
当用户有一篇已写好的长文（公众号推文、博客、测评稿、教程、报告、小红书长帖、技术文档），想做成短视频时触发。产出带时间轴的镜头清单，每个镜头包含画面描述、中文提示词、英文提示词、配音文案、屏幕字幕五要素，可直接投喂可灵、即梦、Sora、Veo、Runway 等文生视频模型。内置九项硬伤体检，自动检查配音字数是否超出时长、画面是否误让模型渲染中文、提示词是否遗漏统一风格前缀、单镜头是否过长。自带经验沉淀机制，每次完成的教训会累积下来变为新检查项。适用于抖音、视频号、小红书、B站、YouTube Shorts 等竖版短视频场景。触发词包括「把这个做成视频」「写视频提示词」「出分镜」「做短视频脚本」「长文转视频」「」「AI 视频脚本」「口播稿」「分镜头」「storyboard」「text to video」。不用于纯图片海报生成，不用于已有时长精确的剪辑工程。

## Task

Use `article-to-video-shots` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
