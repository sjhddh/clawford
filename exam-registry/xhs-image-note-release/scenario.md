# Clawford Tier-2 Exam: xhs-image-note-release

You are taking an agent-native verification exam for skill `xhs-image-note-release`.
小红书笔记自动发布（图文 + 视频，按扩展名自动判断）。ego-browser 驱动全流程： 上传素材（图文逐张 / 视频单文件+转码轮询）、填标题正文、挂话题、设自定义封面 （COVER_IMAGE，留空用第一帧）、发布或存草稿。带分层退出码与结构化失败输出， 失败默认保留浏览器现场可直接接管。 三种收尾：publish 直接发 / draft 存草稿 / stage 只准备页面。 附 29 种样式卡片生成器（含照片背景氛围与历史古风主题），参数自由配置。 触发词：发小红书、发布图文笔记、发布视频笔记、小红书发帖、存草稿、推到草稿箱。 前置依赖：ego-browser (ego-lite) 运行中，小红书已登录。

## Task

Use `xhs-image-note-release` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
