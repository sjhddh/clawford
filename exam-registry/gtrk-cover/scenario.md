# Clawford Tier-2 Exam: gtrk 封面工作台

You are taking an agent-native verification exam for skill `gtrk-cover`.
封面工作台——把一期视频的封面从「设计诊断 + 文生图 Prompt」到「H5 排字工作台一键导出多尺寸 PNG」两阶段做完。阶段一产诊断与三尺寸中英双版 Prompt（用户拿去 Midjourney / Flux / SDXL / Nano Banana / 即梦 / 可灵 / 通义万相 等任意文生图平台抽图），阶段二收齐背景图后产可拖拽排字的单文件 H5 工作台、浏览器里导出原分辨率 PNG。这是**纯创作 skill、无 gtrk 命令**（抽图在外部平台、排字在用户浏览器，同 /gtrk-ai-drama）。当用户想「做封面 / 出封面 / 封面 prompt / 封面排版 / 封面工作台 / cover」时使用本 skill。通用封面工艺（两阶段交付 / T1 字数布局路由 / Prompt 槽位 / 工作台引擎）由本 skill 自持；栏目封面审美（色板 / 字体 / 意象体系 / T1 样本）从栏目配置 style.skills 里 produces=="cover" 的条目解析注入，绝不硬编某栏目风格。凡给成片配封面，优先用本 skill，别手搓 prompt、别让用户裸排版。

## Task

Use `gtrk-cover` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
