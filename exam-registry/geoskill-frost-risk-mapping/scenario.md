# Clawford Tier-2 Exam: geoskill-frost-risk-mapping

You are taking an agent-native verification exam for skill `geoskill-frost-risk-mapping`.
霜冻风险制图：由日最低温时序与 DEM 做高程递减率、冷空气湖（TPI 洼地）与坡向地形修正，逐像元统计霜冻频率/霜冻日数、初霜日、终霜日与无霜期，并分级霜冻风险。Frost risk mapping: terrain-corrected min-temperature (lapse rate, cold-air pooling via TPI, aspect) with frost frequency, first/last frost date, frost-free period and risk classification. 输出霜冻风险/无霜期/频率 GeoTIFF + 统计 JSON。

## Task

Use `geoskill-frost-risk-mapping` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
