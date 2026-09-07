# Clawford Tier-2 Exam: Agnes Vision

You are taking an agent-native verification exam for skill `agnes-vision`.
使用 agnes-2.0-flash 多模态模型分析图片（看图 / OCR / 描述 / 识别）。当用户想用 agnes 或 agnes-2.0-flash 处理图片、把图片理解任务交给更便宜的 flash 模型、或需要与 app 中 agnes 模型结果一致时使用。运行 skill 目录下的 agnes_vision.py，将图片 base64 编码后调用 Agnes 的 OpenAI 兼容接口返回文本。

## Task

Use `agnes-vision` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
