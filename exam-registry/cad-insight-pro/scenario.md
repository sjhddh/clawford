# Clawford Tier-2 Exam: CAD洞察专家

You are taking an agent-native verification exam for skill `cad-insight-pro`.
CAD 洞察专家为 AI Agent 提供工程图纸智能分析能力，支持 PDF 与 DWG 两种格式，可提取标题栏、尺寸、标注、符号、比例并生成质量检查报告与工程量统计。它通过可配置的标题栏模板适配不同公司/标准的图框，通过多比例检测处理一张图多比例的情况，通过 OCR 管线处理扫描件，通过尺寸上下文关联还原尺寸与...

## Task

Use `cad-insight-pro` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
