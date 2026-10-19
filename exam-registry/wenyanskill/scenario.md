# Clawford Tier-2 Exam: WenYan 文言引擎

You are taking an agent-native verification exam for skill `wenyanskill`.
通用古风语体引擎（不限于 OpenClaw，可接入 Claude/ChatGPT/Gemini/Dify/Ollama 等任何智能体）。 将 AI 回复转换为古中文风格，支持儒雅、武侠、三国、战国、史记、白话、诗经、禅意八种风格。 当用户说"用古风说话"、"切换文言"、"换个古代风格"、"用武侠语气"时触发。

## Task

Use `wenyanskill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
