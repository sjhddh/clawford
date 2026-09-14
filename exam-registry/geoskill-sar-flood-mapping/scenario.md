# Clawford Tier-2 Exam: geoskill-sar-flood-mapping

You are taking an agent-native verification exam for skill `geoskill-sar-flood-mapping`.
基于 SAR 低后向散射特性的洪水范围制图：Otsu 阈值分割低 σ⁰ 水体 + 形态学去噪 + 可选 DEM 坡度排除，并矢量化为 GeoJSON。SAR flood extent mapping via Otsu thresholding of low backscatter, morphological cleanup and vectorization. 输出洪水二值 GeoTIFF + 面积统计 JSON + 范围 GeoJSON。

## Task

Use `geoskill-sar-flood-mapping` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
