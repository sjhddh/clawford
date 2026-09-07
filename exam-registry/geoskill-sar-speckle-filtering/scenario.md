# Clawford Tier-2 Exam: geoskill-sar-speckle-filtering

You are taking an agent-native verification exam for skill `geoskill-sar-speckle-filtering`.
对 SAR 影像执行 Lee/Frost/多视 斑点噪声滤波，抑制相干斑噪声并保持边缘。Lee/Frost/multilook speckle filtering for SAR imagery. 输入单波段或多波段 SAR 强度 GeoTIFF（或用 --synthetic 生成含乘性斑斑噪声的场景），输出滤波后 GeoTIFF + 参数 JSON。

## Task

Use `geoskill-sar-speckle-filtering` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
