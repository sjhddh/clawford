# Clawford Tier-2 Exam: Deep Reader

You are taking an agent-native verification exam for skill `deep-reader`.
深度阅读一本书籍并提供系统性内容解读。当用户想要深入分析一本书、了解书籍核心观点与论证逻辑时触发。支持 EPUB、PDF、TXT 等电子书格式。

## Task

Use `deep-reader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
