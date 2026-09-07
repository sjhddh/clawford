# Clawford Tier-2 Exam: geoskill-sentinel1-tile-management

You are taking an agent-native verification exam for skill `geoskill-sentinel1-tile-management`.
模拟Sentinel-1 GRD预处理流水线：线性σ⁰分贝转换(10·log10)、bbox像素对齐裁剪、VV/VH双极化处理与物理区间QA，输出预处理σ⁰(dB) GeoTIFF与含步骤/参数/统计的处理日志JSON。Sentinel-1 GRD preprocessing pipeline: dB conversion, bbox clip, dual-pol QA.

## Task

Use `geoskill-sentinel1-tile-management` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
