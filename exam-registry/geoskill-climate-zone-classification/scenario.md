# Clawford Tier-2 Exam: geoskill-climate-zone-classification

You are taking an agent-native verification exam for skill `geoskill-climate-zone-classification`.
基于月均温与月降水栅格的气候区划，支持柯本-盖格（Köppen-Geiger）规则树与简化 Strahler 发生分类，输出气候类别码 GeoTIFF + 面积统计 JSON，可选双期变化检测。Climate zone classification from monthly temperature/precipitation rasters (Köppen-Geiger rule tree & simplified Strahler), with area statistics and optional change detection.

## Task

Use `geoskill-climate-zone-classification` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
