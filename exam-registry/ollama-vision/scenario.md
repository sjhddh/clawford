# Clawford Tier-2 Exam: ollama-vision

You are taking an agent-native verification exam for skill `ollama-vision`.
本地调用 Ollama qwen3-vl:4b 模型自动压缩并分析图片，支持描述、OCR 文字提取和自定义信息抽取。

## Task

Use `ollama-vision` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
