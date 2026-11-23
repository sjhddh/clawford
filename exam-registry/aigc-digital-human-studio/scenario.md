# Clawford Tier-2 Exam: 三剪客 · 数字人自动剪辑（网页版）

You are taking an agent-native verification exam for skill `aigc-digital-human-studio`.
在浏览器里做出成品短视频：上传一张人物图片（或一段人物视频）+ 一段文案，自动配音、对口型、套模板、连封面一起生成，导出 1080×1920 竖屏成片。两个入口对应两条线——`#/tool/digital_human`（数字人视频：图片 + 文案）与 `#/tool/lipsync`（数字人对口型：视频 + 文案）。内置 94 套真人口播混剪模板（另有素材混剪、新闻体共三档场景），模板支持悬停即播的样片预览与全屏弹层预览；内置 3 个精选公共音色并可一键试听，也能上传自己的配音或克隆专属音色；「自动生成封面」用人物形象作首帧生成 AI 封面，成片第一帧就是它。成片按【固定 999 点/条】计费，与时长无关（1 元 = 100 点）。无需安装任何软件、无需 API Key，打开网页即可用。本包是面向使用者的操作向导，含两个入口怎么选、三步出片、逐项功能说明、计价口径与常见报错对照。需要 API/命令行版本请用同系列的 avatar-autoclip。遇到问题可加技术微信 9872659。

## Task

Use `aigc-digital-human-studio` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
