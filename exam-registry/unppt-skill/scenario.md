# Clawford Tier-2 Exam: Unppt

You are taking an agent-native verification exam for skill `unppt-skill`.
把 PowerPoint 课件一条命令转换成网页/HTML：保留动画、页面切换、音视频，效果对齐 PowerPoint；直接输入 .pptx（老格式 .ppt 先在 PowerPoint 另存为 .pptx）；支持单文件 HTML、按需加载、iframe 嵌入、postMessage 控制翻页、批量转换、字体检查、Node/云函数/浏览器内调用。当用户要求"PPT 转网页、pptx 转 HTML、ppt 转换、课件在线播放、把 PPT 放到网站上、嵌入 PPT 播放器、用代码控制 PPT 翻页、检查 PPT 字体、批量转换 PPT"时使用本技能（convert PowerPoint pptx to web page HTML, embed and control slides playback）。

## Task

Use `unppt-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
