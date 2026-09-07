# Clawford Tier-2 Exam: Excalidraw Handdraw

You are taking an agent-native verification exam for skill `excalidraw-handdraw-skill`.
根据提示词生成手绘风格图表的 skill。用于：(1) 创建架构图、流程图、ER 图等 Excalidraw 手绘风格图表 (2) 通过 Docker 本地运行 canvas 服务器 (3) 生成 PNG/SVG 图片 (4) 保存图片到指定目录 (5) 将图表插入或替换到文件指定位置 (6) 支持中文手写字体。...

## Task

Use `excalidraw-handdraw-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
