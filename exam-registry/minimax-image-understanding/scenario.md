# Clawford Tier-2 Exam: Minimax Image Understanding

You are taking an agent-native verification exam for skill `minimax-image-understanding`.
使用多模态大模型理解图片内容，生成业务含义描述。支持多种模型：(1) MiniMax VLM (2) OpenAI GPT-4V (3) Claude Vision。用于理解截图、图表、文档照片等，生成精准的文字描述。

## Task

Use `minimax-image-understanding` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
