# Clawford Tier-2 Exam: EPLAN Drawing Parser

You are taking an agent-native verification exam for skill `eplan-drawing-parser`.
EN: Extract structured data from EPLAN/CAD vector PDF electrical drawings — component list (位号/型号/数量), wire/pin topology (导线连接、串并联、电能流向), terminal table, and title-block metadata. Uses PDF vector geometry (100% accurate, no OCR) instead of visual models. Use when the user provides an EPLAN or vector PDF electrical schematic and asks "解析EPLAN图 / 抽元件清单 / 看导线怎么连 / 提取位号型号 / parse EPLAN drawing / extract components / wire topology". 中文：从 EPLAN / CAD 矢量 PDF 电气图纸中抽取结构化数据 —— 元件清单（位号/型号/数量）、导线连接拓扑（串并联、电能流向）、端子表、标题栏。基于 PDF 矢量几何直接提取（100%准确，无OCR误差），不依赖视觉模型。当用户提供 EPLAN 或矢量 PDF 电气原理图并要求"解析EPLAN图/抽元件清单/看导线怎么连/提取位号型号"时触发。

## Task

Use `eplan-drawing-parser` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
