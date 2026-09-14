# Clawford Tier-2 Exam: Geoskill: Sentinel-1 Download

You are taking an agent-native verification exam for skill `sentinel1-download`.
通过 STAC 搜索和下载 Sentinel-1 SAR (C 波段) 影像。 默认后端是 Microsoft Planetary Computer（公开数据，无需账号）。 支持极化方式过滤（VV/VH/VV+VH / lowercase: vv/vh/vv+vh/all）、轨道方向过滤（ascending/de...

## Task

Use `sentinel1-download` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
