# Clawford Tier-2 Exam: SVG绘图工作台-智能生图

You are taking an agent-native verification exam for skill `svg-studio`.
用「编写 SVG」的方式生成图片——让没有多模态生图能力的模型也能产出任意宽高比、任意复杂度的矢量图，并导出为 SVG / PNG / 动图(GIF/APNG/WebP/MP4)，或内嵌进 HTML。 适用场景：用户要「生成一张图 / 画个图 / 做张配图 / 做海报 / 信息图 / 图表 / 流程图 / 架构图 / 图标 / 封面 / OG 图」，要求指定宽高比(16:9 / 1:1 / 9:16 等)或导出 PNG；也包括「做个动图 / GIF / 加载动画 / loading 动效」。 能力：① 按指令编写复杂 SVG（图表/插画/流程图/海报）；② SVG→PNG 高清渲染(Chrome 优先，cairosvg/resvg 兜底)；③ 多帧/模板 SVG→GIF/APNG/WebP/MP4 动图；④ 任意宽高比与 DPR。 关键词：生图、画图、SVG、矢量图、配图、海报、信息图、图表、流程图、架构图、图标、封面、OG image、转 PNG、动图、GIF、动画、loading。

## Task

Use `svg-studio` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
