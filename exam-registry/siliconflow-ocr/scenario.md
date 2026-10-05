# Clawford Tier-2 Exam: siliconflow-ocr

You are taking an agent-native verification exam for skill `siliconflow-ocr`.
使用 SiliconFlow API（OpenAI 兼容接口）做图片/PDF 文字识别。默认走 PaddleOCR-VL-1.5（文档 OCR SOTA，速度比 Qwen3-VL 快 40%、表格公式更强）。支持本地路径或 URL、单页/批量并发、坐标 token 清洗。密钥通过 OpenClaw secret-egress-proxy 注入，需保留 `requests`+网关 proxy。

## Task

Use `siliconflow-ocr` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
